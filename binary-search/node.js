class Node {
   #data
   #left
   #right

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

   get data() {
      return this.#data
   }
}

module.exports = Node
