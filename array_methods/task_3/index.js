function filterRangeInPlace(arr, a, b) {
    
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

console.log(arr);
  
filterRangeInPlace(arr, 1, 4); 
  
console.log(arr);