let menuElem = document.getElementById('sweeties');
let listElem = menuElem.querySelector('.list');

listElem.onclick = function() {
  menuElem.classList.toggle('open');
};