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

   includes(value, root = this.#root) {
      if (root === null) {
         return null
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

   deleteItem(value, root = this.#root, parent, left = true) {
      // If target node has a child put it in a temporary var and
      // connect it to the parent node after deleting

      if (root === null) {
         return
      }

      root.left?.data < value
         ? this.deleteItem(value, root.right, root, false)
         : this.deleteItem(value, root.left, root)

      const delNode = () => (left ? (parent.left = null) : (parent.right = null))
      let temp = undefined

      if (root.data === value) {
         if (!root.left && !root.right) {
            delNode()
            return
         }

         if (root.left && root.right) {
            temp = { L: root.left, R: root.right }
            delNode()
            return
         }

         if (root.left || root.right) {
            temp = root.left || root.right
            delNode()
            left ? (parent.left = temp) : (parent.right = temp)
            return
         }
      }
   }

   // Prints the BST model
   prettyPrint(node = this.#root, prefix = '', isLeft = true) {
      if (node === null || node === undefined) {
         return
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
