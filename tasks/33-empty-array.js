/*
* Task description: Write a JavaScript script to empty an array while keeping 
  the original
*/

let arr = [4, 5, 6];
let arrCopy = arr.slice();

while (arrCopy.length > 0) {
  arrCopy.pop();
}

console.log(arr);
console.log(arrCopy);