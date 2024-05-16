/* 
* Task description: Write a JavaScript program to find duplicate values in a JavaScript array.
*/

function findDuplicates(arr) {
    let duplicates = [];
    let seen = [];

    for(let i = 0; i < arr.length; i++){
        if(seen.includes(arr[i])){
            duplicates.push(arr[i]);
        }
        else{
            seen.push(arr[i]);
        }
    }
    return duplicates;
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 4];
console.log(findDuplicates(arr));