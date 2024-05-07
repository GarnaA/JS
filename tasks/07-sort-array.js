/*
* Task description: Write a JavaScript program to sort the items of an array. 
* Expected result: -4,-3,1,2,3,5,6,7,8
*/

let arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

arr.sort((a, b) => a - b);

console.log(arr);