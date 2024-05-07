/*
* Task description: Write a JavaScript function to get the last element of an array. 
Passing the parameter 'n' will return the last 'n' elements of the array.
* Expected result: -2, [9, 0, -2], [7, 9, 0, -2]
* @param {Array, number} arr - input array, n - the number of elements in the array
* @returns {Array}
 */

function last(arr, n){
    if(n > 0){
        return arr.slice(-n);
    }
    return arr[arr.length - 1];
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3)); 
console.log(last([7, 9, 0, -2], 6));