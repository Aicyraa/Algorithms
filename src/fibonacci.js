#!/usr/bin/node

function loopFibonacci(num) {
   const result = [0, 1]

   for (let i = 0; i < num - 1; i++) {
      result.push(result[i] + result[i + 1])
   }

   return result
}

function recursiveFibonacci(n) {

   let result = [0, 1]
   if ((n - 1) === 0) {
      return result.slice(0, 1)
   } else if ((n - 1) === 1) {
      return result
   } else {
      result = recursiveFibonacci(n - 1).concat(0)
      return result.map((v, i) => {
         return i !== result.length - 1 ? v : result[i - 2] + result[i - 1]
      })
   }

}

// recursiveFibonacci(1)
// recursiveFibonacci(0)
// return  0e

module.exports = {
   loopF: loopFibonacci,
   recurF: recursiveFibonacci,
}
