let n = prompt("Enter the number n: ");

nextPrime:
for(let i = 2; i <= n; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            continue nextPrime;
        }
    }
    alert(i);
}