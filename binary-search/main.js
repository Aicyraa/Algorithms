const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [2, 4, 5, 6, 7, 8, 9, 10, 50, 60]
BST.insert(11)
BST.prettyPrint()
BST.levelForEach(value => {
   console.log(value)
})
