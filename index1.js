const newArray = [1, 2, 3, 4, 5, 6, 7];
const newArray2 = [4, 2, 5];

const multiplication3 = (arr) => {
   if (!Array.isArray(arr)) return;
   return arr.map((number) => {
      return number * 3;
   })
}

console.log(multiplication3(newArray));
console.log(multiplication3(newArray2));
