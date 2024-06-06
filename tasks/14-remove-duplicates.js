/*
* Task description: Write a JavaScript program to remove duplicate items from an array 
(ignore case sensitivity).
* Expected result:  
*/

var uniqueElements = new Set();
var arr= ["Apple", "Banana", "apple", "ORANGE", "banana", "orange", "Grapes"];
    
for(let i = 0; i < arr.length; i ++){
    uniqueElements.add(arr[i].toLowerCase());
}

console.log(uniqueElements);
