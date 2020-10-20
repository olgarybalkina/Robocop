const newArray = [1, 2, 3, 4, 5, 6, 7];
const newArray1 = [2, 3, 7, 5];


const squareArray = (arr) => {
   if(!Array.isArray(arr)) return;

   return arr.map((number, index, array) => {
      const valueNumber = array[arr.length-1];
      if (number === valueNumber) return Math.pow(valueNumber, 2);
    
      return number += 1;
   })
   

}
console.log(squareArray(newArray));
console.log(squareArray(newArray1));




