const Tree = require('./tree.js')

describe('Sorting method test', () => {

   it('Array with 2 elements', () => {
      const tree = new Tree()
      tree.root = [4, 3]
      expect((tree.root)).toEqual([3, 4])
   })

   it('Array with 4 elements', () => {
      const tree = new Tree()
      tree.root = [4, 3, 1, 2]
      expect((tree.root)).toEqual([1, 2, 3, 4])
   })

})

