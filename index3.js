const nameArray = ['Hello', 'kek', 'aws', 'world', 'I love JavaScript'];
const nameArray1 = ['asd', 'www', 'lol', 'React'];

const findArray = (arr) => {
   if (!Array.isArray(arr)) return;
   return arr.filter((name, index, array) => {
      const listOfNames = name.length > 4;
      return listOfNames;
   })
}

console.log(findArray(nameArray));
console.log(findArray(nameArray1));



