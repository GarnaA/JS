Function.prototype.defer = function(n){
  setTimeout(this, n);
};

function f() {
  console.log("Hello!");
}
  
f.defer(5000);