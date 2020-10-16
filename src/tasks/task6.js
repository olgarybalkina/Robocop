function splicer(arr, startIndex, deleteCount, valueToInsert) {
   if (!Array.isArray(arr)){
      return
   }
   Arr.splice(0, deleteCount, valueToInsert);
   return arr;
}
const result = splicer([1,2,3,4,5], 0 0, '1');
console.log(result);