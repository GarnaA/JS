/*
* Task description: Write a JavaScript function to remove a specific element from an array.
* Expected result: [2, 9, 6]
* @param {Array, number} arr - input array, n - the element in array to remove
* @returns {Array}
*/

function removeElement(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeElement([2,5,9,6], 5));
