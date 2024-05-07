/*
* Task description: Write a JavaScript program to perform a binary search.
* Expected result: 0, 4
*/

function binary_Search(items, n){
    let left = 0;
    let right = items.length - 1;

    for(let i = 0; i < items.length; i++){
    let mid = Math.floor( (left + right) /2 );

        if(items[mid] == n){
            return mid;
        }
        else if(items[mid] < n){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
}

let items = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(binary_Search(items, 1)); 
console.log(binary_Search(items, 5));