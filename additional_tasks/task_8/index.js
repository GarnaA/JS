let person = {
  name: 'Ben'
}

function sayHi() {
  console.log(`Hi, my name is ${this.name}`);
}

const SayHello = sayHi.bind(person);

SayHello();
