function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
  
let vasya = { name: "John", age: 25 };
let petya = { name: "Masha", age: 30 };
let masha = { name: "Kate", age: 28 };
  
let arr = [ vasya, petya, masha ];
  
sortByAge(arr);
  
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);