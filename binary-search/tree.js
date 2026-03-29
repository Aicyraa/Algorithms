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
      if (arr.length === 0) {
         return null
      }

      const mid = Math.floor(arr.length / 2)
      const root = new Node(arr[mid])
      root.left = this.#buildTree(arr.slice(0, mid))
      root.right = this.#buildTree(arr.slice(mid + 1))

      return root
   }

   #findSuccessor(node) {
      let successorParent = node
      let successor = node.right // ← go RIGHT first
      while (successor.left !== null) {
         successorParent = successor
         successor = successor.left // ← then go left
      }
      return { successorParent, successor }
   }

   includes(value, root = this.#root) {
      if (root === null) {
         return
      }

      if (root.data === value) {
         return true
      }

      const left = this.includes(value, root.left)
      const right = this.includes(value, root.right)

      if (left || right) {
         return true
      } else {
         return false
      }
   }

   insert(value, root = this.#root) {
      if (this.#root === null) {
         this.#root = new Node(value)
      } else if (root.data === value) {
         return
      }

      if (root.data > value) {
         root.left === null
            ? (root.left = new Node(value))
            : this.insert(value, root.left)
      } else {
         root.right === null
            ? (root.right = new Node(value))
            : this.insert(value, root.right)
      }
   }

   deleteItem(value, parentNode = null, node = this.#root, isLeft = true) {
      if (node === null) {
         return node
      }

      if (value < node.data) {
         this.deleteItem(value, node, node.left, true)
      } else if (value > node.data) {
         this.deleteItem(value, node, node.right, false)
      } else {
         if (!node.left && !node.right) {
            parentNode === null
               ? (this.#root = null)
               : isLeft
                 ? (parentNode.left = null)
                 : (parentNode.right = null)
         } else if (node.left && node.right) {
            const { successorParent, successor } = this.#findSuccessor(node)
            node.data = successor.data
            this.deleteItem(
              successor.data,
              successorParent,
              successor,
              successorParent.left === successor, // ← correct: is successor a left child?
            )
          } else {
            const child = node.left ?? node.right
            parentNode === null
               ? (this.#root = child)
               : isLeft
                 ? (parentNode.left = child)
                 : (parentNode.right = child)
         }
      }
   }

   // Prints the BST model
   prettyPrint(node = this.#root, prefix = '', isLeft = true) {
      if (node === null) {
         return node
      }

      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
   }

   set root(arr) {
      const sorted = new Set(this.#sort(arr))
      const root = this.#buildTree([...sorted])
      this.#root = root
   }
}

module.exports = Tree
