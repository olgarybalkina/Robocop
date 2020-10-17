function deleteChars(str) {
   if (typeof str !== 'string') return;

   const slicerString = str.slice(0, - 1);
   return(slicerString.length);
 
   return `${length.slicerString<2 ? 'Пустая строка': slicerString}`;
}

console.log = (deleteChars('Hello'));
console.log = (deleteChars('A'));