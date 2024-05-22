/*
* Task description: Write a JavaScript program to find a pair of elements 
(indices of the two numbers) in a given array whose sum equals a specific target number.
* Expected result: 2, 3
*/

let numbers = [10,20,10,40,50,60,70];
let target = 50;
let result = [];

for(let i = 0; i < numbers.length; i++){
  if((numbers[i] + numbers[i+1]) === target){
    result.push(i);
    result.push(i+1);
  }
}

console.log(result);