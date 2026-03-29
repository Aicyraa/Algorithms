const Node = require('./node')

/**
 * Represents a binary search tree with insert, delete, and search capabilities.
 */
class Tree {
   #root = null

   /**
    * Sorts an array using merge sort algorithm.
    * @private
    * @param {number[]} arr - The array to sort.
    * @returns {number[]} The sorted array.
    */
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

   /**
    * Builds a balanced BST from a sorted array.
    * @private
    * @param {number[]} arr - The sorted array.
    * @returns {Node|null} The root node of the constructed subtree.
    */
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

   /**
    * Finds the in-order successor of a node (minimum value in right subtree).
    * @private
    * @param {Node} node - The node to find successor for.
    * @returns {{successorParent: Node, successor: Node}} The successor node and its parent.
    */
   #findSuccessor(node) {
      let successorParent = node
      let successor = node.right
      while (successor.left !== null) {
         successorParent = successor
         successor = successor.left
      }
      return { successorParent, successor }
   }

   /**
    * Checks if a value exists in the tree.
    * @param {*} value - The value to search for.
    * @param {Node|null} [node=this.#root] - The current node in recursion.
    * @returns {boolean|undefined} True if found, undefined if not found.
    */
   includes(value, node = this.#root) {
      if (node === null) {
         return
      }

      if (value === node.data) {
         return true
      }

      return value < node.data
         ? this.includes(value, node.left)
         : (this.includes(value, node.right) ?? false)
   }

   /**
    * Inserts a value into the BST.
    * @param {*} value - The value to insert.
    * @param {Node|null} [node=this.#root] - The current node in recursion.
    */
   insert(value, node = this.#root) {
      if (node === null) {
         this.#root = new Node(value)
      } else if (value === node.data) {
         return
      }

      if (node.data > value) {
         node.left === null
            ? (node.left = new Node(value))
            : this.insert(value, root.left)
      } else {
         node.right === null
            ? (node.right = new Node(value))
            : this.insert(value, node.right)
      }
   }

   /**
    * Deletes a value from the BST.
    * @param {*} value - The value to delete.
    * @param {Node|null} [parentNode=null] - The parent of the current node.
    * @param {Node|null} [node=this.#root] - The current node in recursion.
    * @param {boolean} [isLeft=true] - Whether the current node is a left child.
    */
   deleteItem(value, parentNode = null, node = this.#root, isLeft = true) {
      if (node === null) {
         return
      }

      if (value < node.data) {
         this.deleteItem(value, node, node.left, true)
         return
      } else if (value > node.data) {
         this.deleteItem(value, node, node.right, false)
         return
      }

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

   /**
    * Prints the BST in a visual tree format.
    * @param {Node|null} [node=this.#root] - The current node to print.
    * @param {string} [prefix=''] - The prefix string for indentation.
    * @param {boolean} [isLeft=true] - Whether the node is a left child.
    */
   prettyPrint(node = this.#root, prefix = '', isLeft = true) {
      if (node === null) {
         return node
      }

      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
   }

   /**
    * Sets the root by building a balanced BST from an array.
    * @param {number[]} arr - The array of values to build the tree from.
    */
   set root(arr) {
      const sorted = new Set(this.#sort(arr))
      const root = this.#buildTree([...sorted])
      this.#root = root
   }
}

module.exports = Tree
