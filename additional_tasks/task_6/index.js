class Rectangle {
  width = 10;
  height = 10;

  get area(){
    return (this.width * this.height);
  }
}

const rect = new Rectangle();
console.log(rect.area);
