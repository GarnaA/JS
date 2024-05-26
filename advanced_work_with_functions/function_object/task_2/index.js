function makeCounter() {
  let count = 0;
  
  function counter() {
    return count++;
  }

  counter.set = function(value){
    count = value;
  };
  
  counter.decrease = function(){
    count--;
  };
  return counter;
}