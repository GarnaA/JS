function sumSalaries(sal){
    let sum = 0;
    
    for(let val of Object.values(sal)){
        sum += val;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log(sumSalaries(salaries));