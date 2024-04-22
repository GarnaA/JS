function ucFirst(text){
    if (!text){
        return text;
    }

    return text[0].toUpperCase() + text.slice(1);
}


console.log( ucFirst("hello") ); //Hello