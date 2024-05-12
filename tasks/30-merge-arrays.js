/*
* Task description: Write a JavaScript function that merges two arrays and removes all duplicate elements.
* Expected result: [3, 2, 30, 1]
*/

function merge_array(array1, array2) {
    let mergedArray = new Set([...array1, ...array2]);
    let arr = Array.from(mergedArray);
    return arr;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));