const { loopF, recurF } = require('./main.js')

test('Using loop for fibonacci', () => {
   expect(loopF(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

describe('Recursive function test', () => {
   test('Simple Input: 1', () => {
      expect(recurF(1)).toEqual([0])
   })

   test('Simple Input: 2', () => {
      expect(recurF(2)).toEqual([0, 1])
   })

   test('Input of 3', () => {
      expect(recurF(3)).toEqual([0, 1, 1])
   })

   test('Input of 4', () => {
      expect(recurF(4)).toEqual([0, 1, 1, 2])
   })

   test('Input of 8', () => {
      expect(recurF(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
   })
})
