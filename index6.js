
const indexSearch = (arr, searchElement) => {
   if (!Array.isArray(arr) || typeof searchElement !== 'string') return;

   const searchOfValue = arr.findIndex((name) => name === searchElement);
  
   if (searchOfValue !== -1) {
      return `Пользователь с именем ${arr[searchOfValue]} найден, его позиция ${searchOfValue}`;
   }
   return `'Пользователь не найден'`;
};

const result = indexSearch(['Alex', 'Maria', 'Max', 'Petr'], 'jhg');

console.log(result);


