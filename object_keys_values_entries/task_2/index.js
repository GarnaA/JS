/*function count(user){
    let counter = 0; 
    for(let val of Object.values(user)){
        counter++;
    }
    return counter;
}*/

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
  };
  
console.log(count(user));