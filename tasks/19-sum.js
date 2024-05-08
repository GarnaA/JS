/*
* Task description:  There are two arrays with individual values. 
Write a JavaScript program to compute the sum of each individual index value in the given array. 
* Expected result: [4, 5, 8, 10, 12, 13]
*/

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
let array3 = [];
for (let i = 0; i < array1.length; i++){
    array3.push(array1[i] + array2[i]);
}

console.log(array3);