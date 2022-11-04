let caja1 = document.querySelector('.caja1');


let pantallaWidth = window.innerWidth;
let pantallaHeight = window.innerHeight;

caja1.style.width = pantallaWidth-80 + 'px';

caja1.addEventListener('click', () => {
  caja1.style.background = 'red';
})