# Fibonacci Sequence

Generate Fibonacci numbers using both iterative and recursive approaches.

![Fibonacci](https://img.shields.io/badge/sequence-mathematical-purple.svg)
![Iterative](https://img.shields.io/badge/iterative-O(n)-green.svg)
![Recursive](https://img.shields.io/badge/recursive-O(2^n)-red.svg)

## Table of Contents

- [Overview](#overview)
- [What is Fibonacci?](#what-is-fibonacci)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Complexity Analysis](#complexity-analysis)
- [Mathematical Properties](#mathematical-properties)

## Overview

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. This module provides two implementations:

1. **Iterative** - Efficient loop-based approach
2. **Recursive** - Educational recursive implementation

## What is Fibonacci?

The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two:

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

**Mathematical Definition:**
```
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1
```

## Installation

```bash
cd fibonacci
```

## Usage

```javascript
const { loopF, recurF } = require('./main')

// Generate first 10 Fibonacci numbers
const result = loopF(10)
console.log(result)  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## API Reference

### loopF(num)

Generates Fibonacci sequence using an iterative approach.

**Parameters:**
- `num` (number): The number of Fibonacci elements to generate

**Returns:** `number[]` - Array containing the Fibonacci sequence

**Time Complexity:** O(n)
**Space Complexity:** O(n)

**Example:**
```javascript
loopF(1)   // [0]
loopF(2)   // [0, 1]
loopF(7)   // [0, 1, 1, 2, 3, 5, 8]
loopF(10)  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

---

### recurF(n)

Generates Fibonacci sequence using a recursive approach.

**Parameters:**
- `n` (number): The number of Fibonacci elements to generate

**Returns:** `number[]` - Array containing the Fibonacci sequence

**Time Complexity:** O(2^n)
**Space Complexity:** O(n) - call stack

**Example:**
```javascript
recurF(1)   // [0]
recurF(2)   // [0, 1]
recurF(7)   // [0, 1, 1, 2, 3, 5, 8]
recurF(10)  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## Examples

### Basic Usage

```javascript
const { loopF, recurF } = require('./main')

// Generate first 15 Fibonacci numbers
console.log(loopF(15))
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// Verify both methods produce same output
console.assert(
   JSON.stringify(loopF(10)) === JSON.stringify(recurF(10)),
   'Both methods should produce identical results'
)
```

### Finding the Nth Fibonacci Number

```javascript
const { loopF } = require('./main')

// Get the 20th Fibonacci number
const fib20 = loopF(21)[20]
console.log(`F(20) = ${fib20}`)  // F(20) = 6765
```

### Ratio Between Consecutive Fibonacci Numbers

```javascript
const { loopF } = require('./main')

const fib = loopF(15)
for (let i = 2; i < fib.length; i++) {
   const ratio = fib[i] / fib[i-1]
   console.log(`F(${i})/F(${i-1}) = ${ratio.toFixed(6)}`)
}
// Approaches the Golden Ratio (phi) ≈ 1.618034
```

## Complexity Analysis

### Iterative Approach (loopF)

| Metric | Complexity | Description |
|--------|------------|-------------|
| Time | O(n) | Single loop through n elements |
| Space | O(n) | Array stores n Fibonacci numbers |

### Recursive Approach (recurF)

| Metric | Complexity | Description |
|--------|------------|-------------|
| Time | O(2^n) | Exponential due to repeated calculations |
| Space | O(n) | Call stack depth |

**Note:** The recursive implementation is provided for educational purposes. For production use, prefer the iterative approach or memoization.

## Mathematical Properties

### Golden Ratio

The ratio of consecutive Fibonacci numbers approaches the Golden Ratio (φ):

```
lim(n→∞) F(n+1)/F(n) = φ ≈ 1.618033988749895
```

### First 20 Fibonacci Numbers

| n | F(n) | n | F(n) |
|---|------|---|------|
| 0 | 0 | 10 | 55 |
| 1 | 1 | 11 | 89 |
| 2 | 1 | 12 | 144 |
| 3 | 2 | 13 | 233 |
| 4 | 3 | 14 | 377 |
| 5 | 5 | 15 | 610 |
| 6 | 8 | 16 | 987 |
| 7 | 13 | 17 | 1597 |
| 8 | 21 | 18 | 2584 |
| 9 | 34 | 19 | 4181 |

## Testing

Run tests from the root directory:

```bash
npm test -- fibonacci
```

Or run directly:

```bash
node code.test.js
```

## Files

| File | Description |
|------|-------------|
| `main.js` | Fibonacci implementations (loop & recursive) |
| `code.test.js` | Test suite |

---

[Back to main README](../README.md)
