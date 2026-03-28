const Node = require('./node')

class Tree {
   #root = null

   #sort(arr) {
      if (arr.length === 1) {
         return arr
      }

      const mid = Math.floor(arr.length / 2)
      const left = this.#sort(arr.slice(0, mid))
      const right = this.#sort(arr.slice(mid))

      let l = 0,
          r = 0,
          result = []

      while (l < left.length && r < right.length) {
         if (left[l] <= right[r]) {
            result.push(left[l++])
         } else {
            result.push(right[r++])
         }
      }
      
      return [...result, ...left.slice(l), ...right.slice(r)]
      
   }

   #buildTree(arr) {

      if (arr.length === 0 ) {
         return null
      }

      const mid = Math.floor(arr.length / 2)
      const root = new Node(arr[mid])
      root.left = this.#buildTree(arr.slice(0, mid))
      root.right = this.#buildTree(arr.slice(mid + 1))

      return root
   }

   includes() {

   }

   insert() {
      
   }

   deleteItem() {

   }



   set root(arr) {
      const sorted = new Set(this.#sort(arr))
      const root = this.#buildTree([...sorted])
      this.#root = root
   }

   // Prints the BST model
   prettyPrint(node = this.#root, prefix = '', isLeft = true) {
      if (node === null || node === undefined) {
        return;
      }
    
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

  
}

module.exports = Tree
