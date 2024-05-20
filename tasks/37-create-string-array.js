/*
* Task description: Write a JavaScript function to create a 
  specified number of elements with a pre-filled string 
  value array.
* Expected result: ["default value", "default value", "default value"],
  ["password", "password", "password", "password"]
* @param {Number, string} a - number of elements in array,
  b - string that array will be filled with
* @returns {Array}
*/

function arrayFilled(a, b){
    let result = [];
    for( let i = 0; i < a; i++){
        result[i] = b;
    }
    return result;
}

console.log(arrayFilled(3, 'default value'));
console.log(arrayFilled(4, 'password'));