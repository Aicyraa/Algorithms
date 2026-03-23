function merge(arr) {
   if (arr.length === 1) return arr;
 
   const mid = Math.floor(arr.length / 2);
   const left = merge(arr.slice(0, mid));
   const right = merge(arr.slice(mid));
 
   // Two-pointer merge
   const result = [];
   let l = 0, r = 0;
 
   while (l < left.length && r < right.length) {
     if (left[l] <= right[r]) {
       result.push(left[l++]);
     } else {
       result.push(right[r++]);
     }
   }
 
   // Append any remaining elements
   return [...result, ...left.slice(l), ...right.slice(r)];
 }
 
 module.exports = merge;