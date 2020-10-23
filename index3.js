const nameArray = ['Hello', 'kek', 'aws', 'world', 'I love JavaScript'];
const nameArray1 = ['asd', 'www', 'lol', 'React'];

const findArray = (arr) => {
   if (!Array.isArray(arr)) return;
   return arr.filter((name, index, array) => {
      return name.length > 4;
   })
}

console.log(findArray(nameArray));
console.log(findArray(nameArray1));



