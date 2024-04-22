function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('hello') || lowerStr.includes('world');
  }
  
console.log( checkSpam('Hey there! Hello world!') );
console.log( checkSpam('free wordddd') );
console.log( checkSpam("rabbit") );