/*
* Task description: Write a JavaScript program to shuffle an array. 
*/

let arr = [1, 4, 5, 9];

let randomIndex;

for(let i = arr.length - 1; i > 0; i--){
    randomIndex = Math.floor(Math.random() * i);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
}


console.log(arr);