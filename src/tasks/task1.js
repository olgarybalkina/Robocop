function sayHello(name) {
   if (typeof name !== 'string') return;
   const favoriteFriend = 'Mark'
   const isItMark = name.toLowerCase() === favoriteFriend.toLowerCase()
   return `${isItMark ? 'Hi' : 'Hello'} ${name}!`;
};



const sayHello1 = (name) => {
   if (typeof name !== 'string') return;
   const favoriteFriend = 'Mark'
   const isItMark = name.toLowerCase() === favoriteFriend.toLowerCase()
   return `${isItMark ? 'Hi' : 'Hello'} ${name}!`;
};

console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));
console.log(sayHello('Mark'));

console.log(sayHello1('Oleg'));
console.log(sayHello1('Viktor'));
console.log(sayHello1('Mark'));
