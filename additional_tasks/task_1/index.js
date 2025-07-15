let animal = {
  speak(){
    console.log('Animal can speak');
  }
};

let dog = Object.create(animal);

dog.speak = function() {
  console.log('The Dog can speak');
};

animal.speak();
dog.speak();
