/*
* Task description: Write a JavaScript function to retrieve the 
  value of a given property from all elements in an array.
* Expected result: [15, -22, 47]
* @param {Array} arr - array of values of different types
* @returns {Array}
*/

function retrieveValues(arr){
  return arr.filter(function(val) {
    return typeof val === 'number' && !isNaN(val) && val !== 0;
  });
}

console.log(retrieveValues([NaN, 0, 15, false, -22, '',undefined, 47, null]))