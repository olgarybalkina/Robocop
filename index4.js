const someNumbers = [1, 2, 3, 4, 5];
const someNumbers1 = [3, 4];


const addition = (arr) => {
   if (!Array.isArray(arr)) return;
   return arr.reduce((initialValue, currentValue) => {
      return initialValue + currentValue;
   });
};


console.log(addition(someNumbers));
console.log(addition(someNumbers1));

const addition1 = (arr) => {
   if (!Array.isArray(arr)) return;
   const result = 0;

    arr.forEach((number) => {
      
      result + number;
       
   });
   return result;
};


console.log(addition1(someNumbers));
console.log(addition1(someNumbers1));