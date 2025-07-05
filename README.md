# 🎯 Incubyte Assessment — String Calculator Kata (TDD)

Welcome!  
This is my submission for the **Incubyte recruitment assessment**, where I implemented a simple **String Calculator** in **JavaScript**, practicing **Test-Driven Development (TDD)** with **Jest**.

---

## 🚀 About This Project

This kata is a classic programming exercise:  
Write an `add` function that takes a string of numbers and returns their sum.  
Each requirement is added step by step, driven entirely by tests.

---

## 🧪 What is TDD?

**Test-Driven Development (TDD)** means you:
1. Write a test **before** you write the code.
2. Watch it fail (**Red**).
3. Write just enough code to make it pass (**Green**).
4. Improve the code while keeping tests passing (**Refactor**).

**Why TDD?**
- You focus on clear requirements.
- You catch bugs early.
- You feel safe to improve code later.
- You don’t build what you don’t need.

---

## 🔄 How This Kata Follows TDD

For each requirement, I wrote a failing test first:
- ✅ Empty input → should return `0`
- ✅ One number → returns that number
- ✅ Two numbers separated by comma → returns sum
- ✅ Handles any number of numbers
- ✅ Supports newlines as delimiters
- ✅ Supports custom delimiter syntax (`//[delimiter]\n[numbers]`)
- ✅ Throws an exception for negative numbers, listing all of them

The solution evolved commit by commit, always passing tests before adding new behavior.

---

## 🗂️ Project Structure

📂 string-calculator/.
- ├── stringCalculator.js # The add function.
- ├── stringCalculator.test.js # Jest tests.
- ├── package.json.
- ├── README.md.

## 📌 Quick Start

Copy and run these commands in your terminal 👇


# 📂 Clone the repository
```bash
git clone <your-repo-url>
```
```bash
cd string-calculator
```

# 📥 Install dependencies
```bash
npm install
```

# ✅ Run all tests with Jest
```bash
npm test
```


