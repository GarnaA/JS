function Obj1() {}

let obj2 = new Obj1("Rabbit");
let obj3 = new Obj1.constructor();

//Works correct
function User(name) {
  this.name = name;
}
  
let user1 = new User('John');
let user2 = new user1.constructor('Pete');
  
console.log( user2.name );

//Does not work correct
function User2(name) {
  this.name = name;
}
User2.prototype = {};
  
let user3 = new User2('John');
let user4 = new user3.constructor('Pete');
  
console.log( user4.name );