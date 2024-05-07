/* 
* Task description: Write a JavaScript function to check whether an `input` is an array or not.
* Expected result: false, true
* @param {*} input - The variable to check.
* @returns {boolean} Returns true if input is array, false if not array. 
*/ 
function is_array(input){
    return Array.isArray(input);
}

console.log(is_array('js test')); //false
console.log(is_array([1, 2, 4, 0])); //true