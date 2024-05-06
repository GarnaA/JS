/*
* Tsk description: Write a JavaScript function to clone an array.
* Expected result: [1, 2, 4, 0], [1, 2, [4, 0]]
* @param {Array} arr - array of numbers
* @returns{Array}
*/

function arrayClone(arr){
    let clonedArr = [];
    for(let i = 0; i < arr.length; i++){
        //clonedArr[i] = arr[i];
        clonedArr.push(arr[i]);
    }
    return clonedArr;
}

console.log(arrayClone([1, 2, 4, 0])); 
console.log(arrayClone([1, 2, [4, 0]]));