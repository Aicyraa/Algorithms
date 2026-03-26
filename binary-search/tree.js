import Node from "./node.js"

export default class Tree {
   
   #root

   #sort(arr) {
      return arr
   }

   #removeDups(arr) {
      return arr
   }

   #buildTree(arr) {
      return arr
   }

   constructor(arr) {
      this.arr = arr
   }

   set root(arrs) {
      const sorted = this.#removeDups(this.#sort(this.arr))
      this.#root = this.#buildTree(sorted)
   }

   get root() {
      return this.#root
   }
   
}