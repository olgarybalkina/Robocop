const splicer = (arr, deleteCount, valueToInsert) => {
   if (!Array.isArray(arr)) {
      return
   }
   arr.splice(0, deleteCount, valueToInsert);
   return arr;
}
const result = splicer([1, 2, 3, 4, 5], 1, '1');

console.log(result);



const splicer1 = (arr, deleteCount, valueToInsert) => {
   if (!Array.isArray(arr)) {
      return
   }
   arr.splice(3, deleteCount, valueToInsert);
   return arr;
}
const removed = splicer1([1, 2, 3, 4, 5], 2, 'Hello');
console.log(removed);


