class Vehicle {
  drive(){
    console.log('I can drive');
  }
}

class Car extends Vehicle {
  honk(){
    console.log('I can honk');
  }
}

let vehicle = new Vehicle;
let car = new Car;

car.drive();
car.honk();