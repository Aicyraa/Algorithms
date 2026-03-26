const mergesort = require('../src/mergesort')

describe('Merge Algoritm Test Cases', () => {
   test('Simpliest Input', () => {
      expect(mergesort([3, 2])).toEqual([2, 3])
   })
   test('4 input', () => {
      expect(mergesort([3, 2, 5, 1])).toEqual([1, 2, 3, 5])
   })
   test('Odd Length Input ', () => {
      expect(mergesort([3, 2, 5, 1, 2])).toEqual([1, 2, 2, 3, 5])
   })
   test('Large Input', () => {
      expect(mergesort([20, 10, 1, 5, 2, 1, 5, 16, 20])).toEqual([
         1, 1, 2, 5, 5, 10, 16, 20, 20,
      ])
   })
})
