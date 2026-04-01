const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [1, 2, 5, 6]
console.log(BST.height(5))
BST.prettyPrint()
