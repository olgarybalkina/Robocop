const someArray = [1, 2, null, 'hello', 5, undefined];
const somerray1 = ['angular', 'react', [], 'vue', 50];

const stringNumber = (arr) => {
   if (!Array.isArray(arr)) return;
   
   const filtrOfString = arr.filter((item) => {
      return typeof item === 'string' || typeof item === 'number';
   })
        return filtrOfString.map((item) => {
       if (typeof item === 'stryng') {
       return item.toUpperCase();
       } 
       return (item*2).toString();
       
     })
}

console.log(stringNumber(someArray));
console.log(stringNumber(somerray1));
