class Rabbit extends Object {
    constructor(name) {
        super();
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rabbit");
  
 console.log( rabbit.hasOwnProperty('name') ); // Ошибка