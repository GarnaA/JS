function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }


  console.log( truncate("Here's what I'd like to say on this topic:", 21) );

console.log(truncate("Hello World!", 20) );