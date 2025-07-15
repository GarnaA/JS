let user = {
  name: 'Ben',
  age: 24
};

let person = {
  sayHello() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

person.sayHello.call(user); 
