function arrayClone(arr){
    let clonedArr = [];
    for(let i = 0; i < arr.length; i++){
        //clonedArr[i] = arr[i];
        clonedArr.push(arr[i]);
    }
    return clonedArr;
}

console.log(arrayClone([1, 2, 4, 0])); 
console.log(arrayClone([1, 2, [4, 0]]));