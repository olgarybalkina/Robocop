const newArr = [1, 2, 3, 4, 5, 6, 7];
const newArr1 = [2, 3, 7, 5];

const squareArray1 = (arr) => {
   if (!Array.isArray(arr)) return;

   return arr.map((number, index, currentArray) => {
   if (index === 0 || index === currentArray.length - 1) {
         return Math.pow(number, 2);
      }
      return number + 1;
   })

}

console.log(squareArray1(newArr));
console.log(squareArray1(newArr1));




