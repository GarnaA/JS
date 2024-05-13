//1st way (with loop)
/*function sumTo(n){
    let i = 0;
    sum = 0;
    while(i <= n){
        sum += i;
        i++;
    }
    return sum;
}*/

//2nd way (recursion)
/*function sumTo(n){
    let sum = 0;
    if(n <= 0){
        return sum;
    }
    else{
        return n + sumTo(n -1);
    }
}*/

//3rd way (arithmetic progression)
function sumTo(n){
    return n * (n + 1) / 2;
}

console.log(sumTo(100));