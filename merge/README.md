# Merge Sort

An efficient, stable sorting algorithm that uses the divide-and-conquer strategy.

![Sort](https://img.shields.io/badge/type-sorting-blue.svg)
![Time](https://img.shields.io/badge/time-O(n%20log%20n)-green.svg)
![Space](https://img.shields.io/badge/space-O(n)-orange.svg)
![Stable](https://img.shields.io/badge/stable-yes-purple.svg)

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Complexity Analysis](#complexity-analysis)
- [Visual Walkthrough](#visual-walkthrough)

## Overview

Merge Sort is a comparison-based sorting algorithm that divides the input array into smaller halves, recursively sorts them, and then merges the sorted halves back together.

### Key Characteristics

- **Divide and Conquer**: Breaks problem into smaller subproblems
- **Stable Sort**: Maintains relative order of equal elements
- **Not In-Place**: Requires O(n) extra space
- **Predictable Performance**: Always O(n log n) regardless of input

## How It Works

```
1. DIVIDE: Split array into two halves
2. CONQUER: Recursively sort each half
3. COMBINE: Merge the sorted halves together
```

### Algorithm Steps

```
Input: [38, 27, 43, 3, 9, 82, 10]

Step 1: Divide until single elements
[38, 27, 43, 3, 9, 82, 10]
├── [38, 27, 43, 3]
│   ├── [38, 27]
│   │   ├── [38]
│   │   └── [27]
│   └── [43, 3]
│       ├── [43]
│       └── [3]
└── [9, 82, 10]
    ├── [9]
    └── [82, 10]
        ├── [82]
        └── [10]

Step 2: Merge back (sorted)
[27, 38] + [3, 43] → [3, 27, 38, 43]
[9] + [10, 82] → [9, 10, 82]

Step 3: Final merge
[3, 27, 38, 43] + [9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]
```

## Installation

```bash
cd merge
```

## Usage

```javascript
const merge = require('./main')

const sorted = merge([38, 27, 43, 3, 9, 82, 10])
console.log(sorted)
// Output: [3, 9, 10, 27, 38, 43, 82]
```

## API Reference

### merge(arr)

Sorts an array of numbers using the merge sort algorithm.

**Parameters:**
- `arr` (number[]): The array to sort

**Returns:** `number[]` - A new sorted array (original is unchanged)

**Example:**
```javascript
const merge = require('./main')

const unsorted = [64, 34, 25, 12, 22, 11, 90]
const sorted = merge(unsorted)

console.log('Original:', unsorted)  // Unchanged
console.log('Sorted:', sorted)      // [11, 12, 22, 25, 34, 64, 90]
```

## Examples

### Basic Sorting

```javascript
const merge = require('./main')

merge([5, 2, 8, 1, 9])
// Returns: [1, 2, 5, 8, 9]
```

### Sorting with Duplicates

```javascript
const merge = require('./main')

merge([4, 2, 4, 1, 2])
// Returns: [1, 2, 2, 4, 4]  (stable: order of 4s and 2s preserved)
```

### Already Sorted Input

```javascript
const merge = require('./main')

merge([1, 2, 3, 4, 5])
// Returns: [1, 2, 3, 4, 5]
```

### Reverse Sorted Input

```javascript
const merge = require('./main')

merge([5, 4, 3, 2, 1])
// Returns: [1, 2, 3, 4, 5]
```

### Edge Cases

```javascript
const merge = require('./main')

merge([])           // []
merge([42])         // [42]
merge([7, 7])       // [7, 7]
merge([-3, -1, -5]) // [-5, -3, -1]
```

## Complexity Analysis

| Case | Time Complexity | Description |
|------|-----------------|-------------|
| Best | O(n log n) | Even sorted input requires full division |
| Average | O(n log n) | Typical random input |
| Worst | O(n log n) | Reverse sorted input |

### Space Complexity

| Metric | Complexity | Description |
|--------|------------|-------------|
| Space | O(n) | Temporary arrays for merging |
| Stack | O(log n) | Recursion depth |

### Why O(n log n)?

```
Level 0: 1 array of size n    → n operations to merge
Level 1: 2 arrays of size n/2 → n operations to merge
Level 2: 4 arrays of size n/4 → n operations to merge
...
Level log₂n: n arrays of size 1

Total: n × log₂n = O(n log n)
```

## Visual Walkthrough

### Merge Step Visualization

```
Merging [3, 27, 38, 43] and [9, 10, 82]

Left:  [3, 27, 38, 43]  ↑l
Right: [9, 10, 82]      ↑r
Result: [3]

Left:  [3, 27, 38, 43]     ↑l
Right: [9, 10, 82]         ↑r
Result: [3, 9]

Left:  [3, 27, 38, 43]        ↑l
Right: [9, 10, 82]            ↑r
Result: [3, 9, 10]

Left:  [3, 27, 38, 43]           ↑l
Right: [9, 10, 82]               ↑r (exhausted)
Result: [3, 9, 10, 27, 38, 43]

Final: [3, 9, 10, 27, 38, 43, 82]
```

### Two-Pointer Technique

```javascript
// Core merge logic
let l = 0, r = 0, result = []

while (l < left.length && r < right.length) {
   if (left[l] <= right[r]) {
      result.push(left[l++])  // Take from left
   } else {
      result.push(right[r++]) // Take from right
   }
}

// Append remaining elements
return [...result, ...left.slice(l), ...right.slice(r)]
```

## Testing

Run tests from the root directory:

```bash
npm test -- merge
```

Or run directly:

```bash
node code.test.js
```

## Files

| File | Description |
|------|-------------|
| `main.js` | Merge sort implementation |
| `code.test.js` | Test suite |

---

[Back to main README](../README.md)
