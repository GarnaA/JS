function randomInteger(min, max){
    let num = min + Math.random() * (max + 1 - min);    

    return Math.floor(num);
}


console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );

//second version

/*function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );*/