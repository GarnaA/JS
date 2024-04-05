function pow(x, n){
    return (x**n);
}

let num = prompt("Enter thr number x: ");
let power = prompt("Enter the power to which the number should be raised: ")

if(power < 1){
    alert("Incorrect power. Enter the number >= 1");
}
else{
    alert(pow(num, power));
}

//another way

/*function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
    alert("Incorrect power. Enter the number >= 1");
} */
