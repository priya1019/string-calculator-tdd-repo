# 🧪 String Calculator TDD (React.js + Jest)

This project is a simple **String Calculator** implemented using **Test-Driven Development (TDD)** in a **React.js** environment. The calculator takes a string of numbers separated by delimiters and returns their sum.

## ✅ Features

- Add function that:
  - Returns `0` for an empty string.
  - Returns a number for single input.
  - Returns the sum of comma-separated numbers.
  - Supports `\n` (newline) as a delimiter.
  - Supports custom delimiters using the format `//[delimiter]\n[numbers]`.
  - Throws an error for negative numbers, listing all negatives.

## 🔧 Tech Stack

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Create React App](https://create-react-app.dev/)

---

## 📁 Project Structure

string-calculator-tdd/
├── src/
│ ├── App.js
│ ├── utils/
│ │ ├── stringCalculator.js
│ │ └── stringCalculator.test.js
├── package.json
└── README.md

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/string-calculator-tdd.git
cd string-calculator-tdd

npm install
npm test
Jest will watch your test files and re-run tests automatically when you make changes.

🧪 Test-Driven Development Process
The application was built using TDD in the following steps:

✅ Test for empty string input ("" → 0)

✅ Test for single number input ("5" → 5)

✅ Support for two comma-separated numbers

✅ Support for multiple comma-separated numbers

✅ Support for newline characters (\n)

✅ Support for custom delimiters (//;\n1;2)

✅ Throw exception for negative numbers (e.g., -1,-2)

✅ Show all negative numbers in the exception

Each step includes a test case followed by the minimal code change to make it pass.

📌 Example Inputs & Outputs
| Input        | Output                                      |
| ------------ | ------------------------------------------- |
| `""`         | 0                                           |
| `"1"`        | 1                                           |
| `"1,2"`      | 3                                           |
| `"1\n2,3"`   | 6                                           |
| `"//;\n1;2"` | 3                                           |
| `"1,-2"`     | ❌ Error: "negative numbers not allowed: -2" |


📃 License
This project is licensed under the MIT License.
```
