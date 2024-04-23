
let fruits = ["Apple", "Plum", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// possible to store different types

let arr = [ 'Apple', { name: 'John' }, true, function() { alert('Hi'); } ];

console.log( arr[1].name );
console.log(arr[2]);


// fruits[fruits.length-1]
//console.log(fruits.at(-1) ); // Orange

fruits.pop();
fruits.push("Pear");
fruits.shift();
fruits.unshift('Pineapple');

console.log(fruits);

