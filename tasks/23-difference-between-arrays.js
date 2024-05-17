/*
* Task description: Write a JavaScript function to find the difference between two arrays.
* Expected result:  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
                    ["6"]
                    console.log(difference([1, 2, 3], [100, 2, 1, 10]));
                    ["3", "10", "100"]
* @param {Array, Array} arr1, arr2 - two arrays of numbers
* @returns{Array}
*/

function difference(arr1, arr2){
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      result.push(arr2[j]);
    }
  }
  return result.map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); //["3", "10", "100"]
//console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); //["6"]