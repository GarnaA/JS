function withFlying(obj){
  obj.fly = function() {
    console.log('I can fly');
  }
return obj;
}

let superman = {
  fight() {
    console.log('I can fight');
  }
}

withFlying(superman);

superman.fly();
superman.fight();
