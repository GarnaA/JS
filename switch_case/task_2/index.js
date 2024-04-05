//rewrite if to switch

/*const number = +prompt('Write number between 0 and 3', '');

if (number === 0) {
  alert('You wrote 0');
}

if (number === 1) {
  alert('You wrote 1');
}

if (number === 2 || number === 3) {
  alert('You wrote 2 or 3');
} */

const number = +prompt('Write number between 0 and 3', '');

switch(number){
    case 0:
        alert('You wrote 0');
        break;
    case 1:
        alert('You wrote 1');
        break;
    case 2:
    case 3:
        alert('You wrote 2 or 3');
        break;

}