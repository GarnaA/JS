/*
* Task description: Write a JavaScript function to get the first element 
of an array. Passing the parameter 'n' will return the first 'n' elements of the array
* Expected result: 7, [], [7, 9, 0], [7, 9, 0, -2], []
* @param {Array, number} arr - the input array, n - the number of elements of the array
* @returns {Array}
*/

function first(arr, n){
    let arr2 = []
    if(n > 0 && n <= arr.length){
        for(let i = 0; i < n; i ++){
            arr2.push(arr[i]);
        }
        return arr2;
    }
    else if(n > 0 && n > arr.length){
        return arr;
    }
    else if(n < 0){
        return [];
    }

    return arr[0];
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3)); 
console.log(first([7, 9, 0, -2],3)); 
console.log(first([7, 9, 0, -2],6)); 
console.log(first([7, 9, 0, -2],-3));