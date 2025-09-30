# 🚀 CSV to Multiple React Sites Generator

> **Easily generate multiple React websites from a single CSV file!**

---

## 📦 What is this project?

This project helps you create several small React websites automatically, using information from a file called `websites.csv`. Each row in the CSV file becomes a new website, with its own name, description, and contact info.

**Each website will have:**
- 🌐 Domain (website address)
- 🏷️ Title (name of the website)
- 📝 Description (what the website is about)
- ☎️ Phone number
- 📍 Address

---

## ⚙️ How does it work?

1. You run a script called `generate.js`.
2. The script copies a React template for each website into a folder under `build/<domain>/`.
3. It puts the information from the CSV file into each website.
4. You can then open any website, install its dependencies, and run it like a normal React app.

---

## 🛠️ Step-by-step Guide

### 1. Install Node.js
- Download and install Node.js version 16 or higher from [nodejs.org](https://nodejs.org/).

### 2. Set up the project
- Open a terminal (Command Prompt or PowerShell on Windows).
- Go to the project folder.
- Run these commands:

```bash
npm install
node generate.js
```

### 3. Find your generated websites
- After running the script, look in the `build` folder. You will see a folder for each website, named after its domain (for example, `foodexpress.com`).

### 4. Run a website locally
- Go into one of the website folders:

```bash
cd build/foodexpress.com
npm install
npm start
```
- This will open the website in your browser. You can edit the code if you want!

### 5. Go back to the build folder
- To go back, type:
```bash
cd ..
```

---

## 🗂️ What does the output look like?

```
/build
  ├─ foodexpress.com
  ├─ techhubbd.com
  └─ bookbazaar.com
```

---

## 📄 License

MIT
