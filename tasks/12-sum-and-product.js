/*
* Task description: Write a JavaScript program to compute the sum and product 
of an array of integers. 
*/

let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1]

let sum = 0;
let product = 1;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    product *= arr[i];
}

console.log(sum);
console.log(product);