/*
* Task description: Write a JavaScript program that accepts a string as input 
and swaps the case of each character.
* Expected result: 'tHE qUICK bROWN fOX'.
*/

let input = 'The Quick Brown Fox';
let result = ' ';

for(let i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase()){
        result += input[i].toLowerCase();
    }
    else {
        result += input[i].toUpperCase();
    }
}

console.log(result);