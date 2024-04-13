//type coercion

let num1 = 10.87;
let num2 = 'hello';

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num2.toUpperCase());
console.log(num1.toFixed()); 

let num3 = 10;
let num4 = null;

console.log(num3 + num4);
console.log(num3 + false);
console.log(num3 + true);
console.log(num3 + undefined);

let num5 = 10;
let num6 = '10';

console.log(num5 == num6);
console.log(num5 === num6);