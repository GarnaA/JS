/*
* Task description: Write a JavaScript function to find an array containing a specific element.
* Expected result: [True]
* @param {Array, number} arr - input array, n - the element in array to find
* @returns {Array}
*/

function contains(arr, num){
  let result = false;
  for(let i = 0; i < arr.length; i++){
    if(arr.includes(num)){
      result = true;
    }
  }
  return result;
}

arr = [2, 5, 9, 6];
console.log(contains(arr, 5));