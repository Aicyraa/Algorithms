class Node {
   #data
   #left = null
   #right = null

   constructor(mid) {
      this.#data = mid
   }

   set left(value) {
      this.#left = value
   }
   get left() {
      return this.#left
   }

   set right(value) {
      this.#right = value
   }

   get right() {
      return this.#right
   }

   set data(value) {
      this.#data = value
   }

   get data() {
      return this.#data
   }
}

module.exports = Node
