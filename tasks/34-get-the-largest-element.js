/*
* Task description: Write a JavaScript function to get the nth 
  largest element from an unsorted array.
* Expected result: 
* @param {Array, number} arr - an unsorted array, 
  n - number of elements in array to choose from
* @returns {number}
*/

function nthLargestNum(arr, n){
    let largest = arr[0];
    for(let i = 1; i <= n; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(nthLargestNum([ 43, 56, 23, 89, 88, 90, 99, 652], 4));