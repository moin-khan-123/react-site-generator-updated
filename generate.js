const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const TEMPLATE = path.join(ROOT, 'template');
const BUILD = path.join(ROOT, 'build');

if (!fs.existsSync('websites.csv')) {
  console.error('websites.csv not found in project root.');
  process.exit(1);
}

const csv = fs.readFileSync('websites.csv', 'utf8').trim().split('\n');
const headers = csv[0].split(',').map(h => h.trim());
const rows = csv.slice(1);

function parseRow(line) {
  const parts = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === ',' && !inQuotes) {
      parts.push(cur);
      cur = '';
      continue;
    }
    cur += ch;
  }
  parts.push(cur);
  return parts;
}

if (!fs.existsSync(BUILD)) fs.mkdirSync(BUILD);

rows.forEach(r => {
  if (!r.trim()) return;
  const vals = parseRow(r);
  const obj = {};
  headers.forEach((h, idx) => obj[h] = vals[idx] || '');
  const domain = obj['domain'];
  const dest = path.join(BUILD, domain);
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  if (fs.cpSync) {
    fs.cpSync(TEMPLATE, dest, { recursive: true });
  } else {
    const copyRecursiveSync = (src, dest2) => {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();
      if (isDirectory) {
        fs.mkdirSync(dest2, { recursive: true });
        fs.readdirSync(src).forEach(childItemName => {
          copyRecursiveSync(path.join(src, childItemName),
                            path.join(dest2, childItemName));
        });
      } else {
        fs.copyFileSync(src, dest2);
      }
    };
    copyRecursiveSync(TEMPLATE, dest);
  }
  const siteDataPath = path.join(dest, 'src', 'siteData.json');
  fs.writeFileSync(siteDataPath, JSON.stringify(obj, null, 2));
  console.log('Generated:', domain);
});

console.log('\nAll sites generated under ./build');
