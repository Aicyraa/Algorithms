const Tree = require('./tree.js')

describe('Sorting method test', () => {
   it.skip('Array with 2 elements', () => {
      const tree = new Tree()
      tree.root = [4, 3]
      expect(tree.root).toEqual([3, 4])
   })

   it.skip('Array with 4 elements', () => {
      const tree = new Tree()
      tree.root = [4, 3, 1, 2]
      expect(tree.root).toEqual([1, 2, 3, 4])
   })
})

describe('Tree methods', () => {
   const tree = new Tree()
   tree.root = [2, 4, 6]

   it('Includes 6 (root)', () => {
      expect(tree.includes(6)).toBeTruthy()
   })

   it.skip('Includes 10', () => {
      expect(tree.includes(6)).toBeTruthy()
   })

   it.skip('Includes includes 1', () => {
      expect(tree.includes(1)).toBeFalsy()
   })
   
   it.skip('Array with 4 elements', () => {
      expect(tree.root).toEqual([1, 2, 3, 4])
   })
})
