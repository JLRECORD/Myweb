import { artista } from './artistasArray.js';


const v1 = document.querySelector('.v1');
const vistaNueva = document.querySelector('.vistaNueva');
let perfilN = document.querySelector('.perfilN');
let perfilChar = document.querySelector('.perfilChar');

const cuerpo = document.querySelector('.cuerpo');


let pintarArray = [];
artista.forEach(item => {
  pintarArray.push(`<div class="ca">
      <img class="img" src="${item.perfil}">
      <div class="separador"></div>
      <h1 class="name">${item.name}</h1>
      <h4 class="arte">${item.arte}</h4>

      <p class="info">${item.descripcion}</p>
         <hr>
      <div class="cajaBtn">
        <div wsap="a"  class="btn">
         <p class="none">${item.name}</p>

          <img src="img/wsap1.png" class="bt">
          <p class="none">${item.wsap}</p>
        </div>
        <div class="btn" face="a">
        <p>${item.face}</p>
          <img src="img/facebook.png" class="bt">
        </div>
        <div class="btn" insta="a">
          <img src="img/instagram.png" class="bt">
        </div>

      </div>



      <div class="lista">


        <div class="li">
       <h1>Sigueme en mis redes sociales</h1>
        </div>

      </div>





    </div>`)
});


cuerpo.innerHTML = pintarArray.join(' ')


//click cuerpo
cuerpo.addEventListener('click', e => {
  if (e.target.hasAttribute('wsap')) {
    let numero = e.target.lastElementChild.textContent;
    let name = e.target.firstElementChild.textContent;

    let sms = 'Hola ' + name + ' soy ' + localStorage.getItem('NR') + ' me puedes agregar';
    window.location.href = `https://wa.me/${numero}?text=${sms}`
  } else if (e.target.hasAttribute('face')) {
    let f = e.target.firstElementChild.textContent;
    window.location.href = f;
  } else if (e.target.hasAttribute('insta')) {
    console.log('insta')
  }

})









//scroll....................
window.addEventListener('scroll', () => {
  let scrol = document.documentElement.scrollTop;

  if (scrol > vistaNueva.offsetTop - 45) {
    vistaNueva.style.width = '110px';

    /* if (scrol > vistaNueva.offsetTop + 110) {
       v1.style.position = 'fixed';
       v1.style.top = '-120px';
       v1.style.right = '50px';
       v1.style.zIndex = '8';
       v1.style.width = '60px';



     } else {
       v1.style.position = 'sticky';
       v1.style.left = '0px';
       v1.style.zIndex = '0';



     }*/

  } else {
    vistaNueva.style.width = '100%';


    // vistaNueva.style.bottom = '5px';



  }
})



// prueba de btnRegistro............
let btnR = document.querySelector('.btnR');
let pr = document.querySelector('.pr');

let RegistroTime = setTimeout(() => {

  if (localStorage.getItem('NR')) {

  } else {

    pr.className = 'pruebaRegistroOn'
    btnR.addEventListener('click', () => {
      window.location.href = 'registro.html';



    })
  }


  clearTimeout(RegistroTime);

}, 5000);




let verMas = document.querySelector('.verMas');

verMas.addEventListener('click', () => {
  localStorage.removeItem('NR');
})



//perfil 
if (localStorage.getItem('NR')) {
  perfilChar.textContent = localStorage.getItem('NR').charAt(0);
  perfilN.textContent = localStorage.getItem('NR');
} else {
  perfilN.textContent = 'Sin perfil';
}



//filtrar

const busca = document.querySelector('.busca');
const cajaBusca = document.querySelector('.cajaBusca');



busca.addEventListener('click', () => {
  buscaa.className = 'bbuscaa';
  cajaBusca.className = 'ccajaBusca';
})



let pintarArrayFiltro = [];
const bus = document.querySelector('.bus');
const buscaa = document.querySelector('.buscaa');

bus.addEventListener('keyup', () => {


  let fa;
  let nombre = bus.value;

  fa = artista.filter(item => {
    if (item.name.startsWith(nombre)) {
      return item;
    }

  })



  
  fa.forEach(item => {
    pintarArrayFiltro.push(`<div class="ca">
      <img class="imgg" src="${item.perfil}">
      <div class="separador"></div>
      <h1 class="name">${item.name}</h1>
      <h4 class="arte">${item.arte}</h4>

      <p class="info">${item.descripcion}</p>
         <hr>
      <div class="cajaBtn">
        <div wsap="a"  class="btn">
         <p class="none">${item.name}</p>

          <img src="img/wsap1.png" class="bt">
          <p class="none">${item.wsap}</p>
        </div>
        <div class="btn" face="a">
        <p>${item.face}</p>
          <img src="img/facebook.png" class="bt">
        </div>
        <div class="btn" insta="a">
          <img src="img/instagram.png" class="bt">
        </div>

      </div>



      <div class="lista">


        <div class="li">
       <h1>Sigueme en mis redes sociales</h1>
        </div>

      </div>





    </div>`)
  });
/*
if (bus.value.length === 0){
  pintarArrayFiltro = [];
}
*/
  buscaa.innerHTML = pintarArrayFiltro.join(' ')

  pintarArrayFiltro = [];
})


const salirBusca = document.querySelector('.salirBusca');

salirBusca.addEventListener('click', () => {
  buscaa.className = 'buscaa'
  cajaBusca.className = 'cajaBusca'
})
