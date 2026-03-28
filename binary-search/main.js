const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [2, 4, 6]
BST.insert(10)
BST.insert(1)
BST.insert(3)
BST.insert(12)
BST.insert(5)
BST.insert(20)
BST.prettyPrint()