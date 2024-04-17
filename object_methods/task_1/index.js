let calculator = {
    read(){
        num1 = prompt("enter a: ", 0);
        num2 = prompt("enter b: ", 0);
    },

    sum(){
        return (+num1 + +num2);
    },

    mul(){
        return (num1 * num2);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//using "this"

let calculator2 = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator2.read();
  alert( calculator2.sum() );
  alert( calculator2.mul() );
