const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [1, 2, 5, 6]
BST.insert(8)
BST.insert(9)
BST.insert(10)
console.log(BST.height(5))
const depth = BST.depth(9)
console.log(depth);

BST.prettyPrint()
