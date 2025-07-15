let userProto = {
  sayHello(){
    console.log('Hi!');
  }
}

user1 = Object.create(userProto);
user1.sayHello();
