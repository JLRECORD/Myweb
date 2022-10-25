/*
let b = document.querySelector('.b');
var inp = document.querySelector('input')
let h1 = document.querySelector('h1');
b.addEventListener('click', (e) => {
  e.preventDefault();
  h1.textContent = inp.value;
});

*/

var bt = document.querySelector('.bt');

bt.addEventListener('click', () => {
  window.location.href = 'aaa.php?name=betania';
});