# Algorithms

A collection of fundamental algorithms implemented in JavaScript, designed for learning and reference.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14-green.svg)

## Table of Contents

- [Overview](#overview)
- [Algorithms](#algorithms)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)

## Overview

This repository contains implementations of classic computer science algorithms. Each algorithm is self-contained with its own documentation and test suite.

## Algorithms

| Algorithm | Description | Time Complexity | Space Complexity |
|-----------|-------------|-----------------|------------------|
| [Binary Search Tree](binary-search/) | A self-balancing BST with insert, delete, and search operations | O(log n) avg | O(log n) |
| [Fibonacci](fibonacci/) | Generate Fibonacci sequences using iterative and recursive approaches | O(n) / O(2^n) | O(n) / O(n) |
| [Merge Sort](merge/) | Efficient, stable sorting algorithm using divide-and-conquer | O(n log n) | O(n) |

### Quick Links

- **[Binary Search Tree](binary-search/)** - Tree data structure with ordered element storage
- **[Fibonacci](fibonacci/)** - Mathematical sequence generation
- **[Merge Sort](merge/)** - Efficient sorting algorithm

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/Algorithms.git
cd Algorithms
npm install
```

## Usage

### Binary Search Tree

```javascript
const Tree = require('./binary-search/tree')

const bst = new Tree()
bst.root = [5, 3, 7, 1, 4, 6, 8]
bst.insert(9)
bst.includes(7) // true
bst.deleteItem(7)
bst.prettyPrint()
```

### Fibonacci

```javascript
const { loopF, recurF } = require('./fibonacci/main')

loopF(10)   // Iterative: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
recurF(10)  // Recursive: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Merge Sort

```javascript
const merge = require('./merge/main')

merge([38, 27, 43, 3, 9, 82, 10])
// Returns: [3, 9, 10, 27, 38, 43, 82]
```

## Testing

Run the test suite using Jest:

```bash
npm test
```

Run tests for a specific algorithm:

```bash
npm test -- binary-search
npm test -- fibonacci
npm test -- merge
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with :heart: for learning and education
