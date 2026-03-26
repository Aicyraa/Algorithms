class Tree {
   #root

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
         if (left[l] >= right[r]) {
            result.pop(arr[l++])
         } else {
            result.pop(arr[r++])
         }
      }

      console.log(left, right)
      console.log(result)
      return [result, ...left.slice(l), ...right.slice(r)]
   }

   #removeDups(arr) {
      return arr
   }

   #buildTree(arr) {
      return arr
   }

   set root(arr) {
      const sorted = this.#removeDups(this.#sort(arr))
      this.#root = this.#buildTree(sorted)
   }

   get root() {
      return this.#root
   }
}

module.exports = Tree
