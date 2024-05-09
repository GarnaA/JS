/*
* Task description: Write a JavaScript function to remove
'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
* Expected result: [15, -22, 47]
@param {Array} arr - array of values
@returns {Array}
*/

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

function remove(arr){
    return arr.filter(function(val){
        return val !== null && val !== 0 &&
               val !== '' && val !== false &&
               val !== undefined && !Number.isNaN(val);
    });
}

console.log(remove(arr));