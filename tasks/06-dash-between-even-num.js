/*
* Task description: Write a JavaScript program that accepts a number as input and inserts dashes (-) 
between each even number.
* Expected result: 0-254-6-8*/


let result = '';
let num = '025468';

for (let i = 0; i < num.length; i++) {
    //let val = parseInt(num[i], 10);

    if (Number(num[i] % 2 === 0) && Number(num[i + 1], 10) % 2 === 0) {
        result += num[i] + '-';
    } 
    else {
        result += num[i];
    }
}


console.log(result); 