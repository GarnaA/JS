function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype = {
  greet(){
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

let person = new Person('Ben', 24);
person.greet();
