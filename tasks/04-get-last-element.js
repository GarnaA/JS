function last(arr, n){
    let arr2 = []
    if(n >= arr.length){
        return arr;
    }
    else if (n < arr.length){
        for(let i = n; i > 0; i--){
            arr2.push(arr[i]);
        }
    }
    else{
        for(let i = arr.length; i > 0; i--){
            arr2.push(arr[i]);
        }
    }
    return arr[arr.length - 1];
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3)); 
console.log(last([7, 9, 0, -2], 6));