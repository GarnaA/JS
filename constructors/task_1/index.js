function Calculator(){
    this.sum = function(){
        return this.a + this.b;
    };
    
    this.mul = function(){
        return this.a * this.b;
    };
    
    this.read = function(){
        this.a = +prompt("Enter a: ", 0);
        this.b = +prompt("Enter b: ", 0);
    };
}


let calculator = new Calculator();
calculator.read();

alert( "Sum: " + calculator.sum() );
alert( "Mul: " + calculator.mul() );