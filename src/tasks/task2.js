function min(a, b) {

   return `${a < b ? a : b}`;
}

const min1 = (a, b) => {

   return `${a < b ? a : b}`;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

console.log(min1(2, 5));
console.log(min1(3, -1));
console.log(min1(1, 1));