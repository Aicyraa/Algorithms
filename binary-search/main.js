const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [2, 4, 5, 6, 7, 8, 9, 10, 50, 60]
console.log();
console.log("Pre");
BST.preOrderForEach(val => {
   console.log(val);
})
console.log();
console.log("In");
BST.inOrderForEach(val => {
   console.log(val);
})
console.log();
console.log("Post");
BST.postOrderForEach(val => {
   console.log(val);
})

BST.prettyPrint()
