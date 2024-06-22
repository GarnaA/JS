Function.prototype.defer = function(n){
  const f = this;
  return function(...args){
    setTimeout(() => f.apply(this, args), n);
  }
};

function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(5000)(1, 2);