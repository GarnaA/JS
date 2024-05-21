/*
* Task description: Write a JavaScript function to move an array element from one position to another.
* Expected result: [20, 30, 10, 40, 50], [10, 20, 30, 50, 40]
* @param {Array, number, number}
* @returns {Array}
*/

function move(arr, elPos, movePos){
  if (elPos < 0) {
    elPos = arr.length + elPos;
  }
  if (movePos < 0) {
    movePos = arr.length + movePos;
  }

  let element = arr.splice(elPos, 1);

  arr.splice(movePos, 0, element);

  return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));