function camelize(str) {
    return str
      .split('-')
      .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
      .join(''); 
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") == 'listStyleImage' );
console.log( camelize("-webkit-transition") == 'WebkitTransition' );