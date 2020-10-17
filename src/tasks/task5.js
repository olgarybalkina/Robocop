function sumDigits(number) {
   var str = number.toString();
   var sum = 0;

   for (var i = 0; i < str.length; i++) {
      sum += parseInt(str.charAt(i), 10);
   }

   return sum;
}

console.log(sumDigits(16));
console.log(sumDigits(942));