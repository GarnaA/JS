/*
* Task description: Write a JavaScript function to filter false, null, 0 and blank values from an array.
* Expected result: [58, "abcd", true]
* @param{Array} arr - array of values
* @returns{Array} 
*/

function filterArrayValues(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === ''){
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0]));