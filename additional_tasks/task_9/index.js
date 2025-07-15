class Shape {
  get area(){
    throw new Error('method is not working');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  get area(){
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(2);
console.log(c.area);
