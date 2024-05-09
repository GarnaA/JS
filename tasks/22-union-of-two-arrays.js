/*
* Task description: Write a JavaScript program to compute the union of two arrays.
* Expected result: [1, 2, 3, 10, 100]
*/

function union(arr1, arr2){
    let arr3 = arr1.concat(arr2);

    return Array.from(new Set(arr3));
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));