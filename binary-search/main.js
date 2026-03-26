const Tree = require('./tree.js')

function prettyPrint(node, prefix = '', isLeft = true) {
   if (node === null || node === undefined) {
     return;
   }
 
   prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
   console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
   prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
 }

const BST = new Tree()
BST.root = [3, 2, 1, 6, 5, 4, 10, 9, 8, 7]
prettyPrint(BST.root)