import { artistas } from './ArrayJson.js'


var cuerpo = document.querySelector('.cuerpo');
var imgPerfil = document.querySelector('.img');
var info = document.querySelector('.info');
var ventModal = document.querySelector('.ventModal');

var pintarArray = [];
artistas.forEach(item => {
  pintarArray.push(`<div class="paSeccion">

      <div class="fotoPerfil"></div>
     
          <img class="img" src="${item.img}">

      <div class="seccion1">
        <div class="cajaPerfil">
          <div class="Espacioimg"></div>
          <div class="caja">

            <h1 class="tituloSeccion">${item.nombre}</h1>
            <h3 class="arte">${item.arte}</h3>
          </div>

        </div>
         <br>
         <hr>
         <br>

        <p class="texto">${item.referencia}</p>

      </div>
    </div>

 <div class="noti">
        <div class="botones">
          <div class="boton1"></div>
          <div class="boton2"></div>
        </div>
      </div>
      
      <hr class="hr">`)
});







cuerpo.innerHTML = pintarArray.join(' ')




//SCROLL
let fab = document.querySelector('.fab');

window.addEventListener('scroll', () => {
  let scrolll = document.documentElement.scrollTop;

  if (scrolll > imgPerfil) {

  }

})



fab.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0
  });
})



//abrir y serrar Modal
var m = 1;
info.addEventListener('click', () => {
  if (m === 1){
    ventModal.className = 'aniM';
    m = 2;
  }else{
    ventModal.className = 'ventModal';
    m = 1;
  }
})



//ver perfil
let img = document.querySelector('.img');
cuerpo.addEventListener('click', e => {
  if (e.target && e.target.tagName === 'IMG'){
  e.target.style.opacity = '0.2';
  
  }
})
