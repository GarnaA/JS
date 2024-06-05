/*
* Task description: Write a JavaScript program to add items to a 
blank array and display them. 
* Expected result: [2, 3]
* @param {Array, number} arr - the input array, 
a - the item to be added to array
* @returns {Array}
*/

let arr = [];

function addElement(arr, a){
  arr.push(a);
  return arr;
}

function displayArray(){
  console.log(arr);
}

addElement(arr, 2);
addElement(arr, 3);

displayArray();