# Technical Task 2 - CSV to Multiple React Sites

This project generates small React websites from a CSV file (`websites.csv`).
Each row = one website with:

- domain
- title
- description
- phone
- address

## How it works

- Run `node generate.js` → copies React template into `build/<domain>/`.
- Injects CSV row as `src/siteData.json`.
- Each site can be run with `npm install && npm start`.

## Steps

1. Install Node.js (>=16).
2. From root:
   ```bash
   npm install
   node generate.js
   ```
3. Generated sites under `./build/<domain>`
4. Run one:
   ```bash
   cd build/foodexpress.com
   cd build/techhubbd.com
   cd build/bookbazaar.com
   npm install
   npm start
   ```
5. Move up one folder

`` `cd ..` ``

## Output folder structure

```
/build
   /foodexpress.com
   /techhubbd.com
   /bookbazaar.com
```
