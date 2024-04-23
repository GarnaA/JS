let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

let mid = Math.floor((styles.length - 1) / 2);
styles[mid] = "Classic";

console.log(styles.shift());

styles.unshift("Rap", "Reggae");