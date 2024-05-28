/*
* Task description: Write a JavaScript program to find the sum of squares of an array.
* Expected result: 78
*/

let arr = [2, 4, 7, 3];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += ( arr[i] * arr[i] );
}

console.log(sum);