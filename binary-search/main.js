const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [2, 4, 5, 6, 7, 8, 9]
BST.deleteItem(6)
BST.prettyPrint()