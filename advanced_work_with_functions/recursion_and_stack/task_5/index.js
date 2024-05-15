/*
function printList(list){
  let arr = []
  while(list){
    arr.push(list.value);
    list = list.next;
  }

  for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}
*/

//recursion
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}
  
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}
printReverseList(list);