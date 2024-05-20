/*
* Task description: Write a JavaScript function to create 
  a specified number of elements with a pre-filled
  numeric value array.
* Expected result: [0, 0, 0, 0, 0, 0], [11, 11, 11, 11]
* @param {Number, Number} a - number of elements in array,
  b - number that array will be filled with
* @returns {Array}
*/

function arrayFilled(a, b){
    let result = [];
    for( let i = 0; i < a; i++){
        result[i] = b;
    }
    return result;
}

console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));