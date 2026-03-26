const Tree = require('./tree.js')

describe('Sorting method test', () => {
   const newTree = new Tree()

   it('Array with 2 elements', () => {
      expect((newTree.root = [4, 3])).toEqual([3, 4])
   })
})
