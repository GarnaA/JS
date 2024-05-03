function first(arr, n){
    let arr2 = []
    if(n > 0 && n <= arr.length){
        for(let i = 0; i < n; i ++){
            arr2.push(arr[i]);
        }
        return arr2;
    }
    else if(n > 0 && n > arr.length){
        return arr;
    }
    else if(n < 0){
        return [];
    }

    return arr[0];
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3)); 
console.log(first([7, 9, 0, -2],3)); 
console.log(first([7, 9, 0, -2],6)); 
console.log(first([7, 9, 0, -2],-3));