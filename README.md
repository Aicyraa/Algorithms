# Algorithms

A collection of fundamental algorithms implemented in JavaScript, designed for learning and reference.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14-green.svg)

## Table of Contents

- [Overview](#overview)
- [Algorithms](#algorithms)
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)

## Overview

This repository contains implementations of classic computer science algorithms. Each algorithm is self-contained with its own documentation and test suite.

## Algorithms

| Algorithm | Description | Time Complexity | Space Complexity |
|-----------|-------------|-----------------|------------------|
| [Merge Sort](merge/) | Divide-and-conquer sorting algorithm | O(n log n) | O(n) |
| [Fibonacci](fibonacci/) | Sequence generation (iterative & recursive) | O(n) / O(2^n) | O(n) |
| [Binary Search Tree](../Data-Structures/binary-search/) | Tree data structure with ordered storage | O(log n) avg | O(log n) |

### Quick Links

- **[Merge Sort](merge/)** - Efficient, stable sorting with divide-and-conquer strategy
- **[Fibonacci](fibonacci/)** - Mathematical sequence with iterative and recursive implementations
- **[Binary Search Tree](../Data-Structures/binary-search/)** - BST lives in Data-Structures module

## Installation

Clone the repository and install dependencies:

```bash
cd Algorithms
npm install
```

## Testing

Run the test suite using Jest:

```bash
npm test
```

Run tests for a specific algorithm:

```bash
npm test -- merge
npm test -- fibonacci
```

## Usage

### Merge Sort

```javascript
const merge = require('./merge/main')

const unsorted = [38, 27, 43, 3, 9, 82, 10]
const sorted = merge(unsorted)
console.log(sorted)  // [3, 9, 10, 27, 38, 43, 82]
```

### Fibonacci

```javascript
const { loopF, recurF } = require('./fibonacci/main')

loopF(10)   // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
recurF(10)  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Binary Search Tree

```javascript
const Tree = require('../Data-Structures/binary-search/tree')

const bst = new Tree()
bst.root = [8, 3, 10, 1, 6, 14, 4, 7, 13]

bst.includes(6)     // true
bst.insert(5)
bst.deleteItem(3)
bst.prettyPrint()   // Visual tree output
```

---

Built with ❤️ for learning and education
