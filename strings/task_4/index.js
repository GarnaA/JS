function extractCurrencyValue(text){
    return +text.slice(1);
}


console.log( extractCurrencyValue('$120')  === 120 );