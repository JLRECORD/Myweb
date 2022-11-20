// Registro

const btnRegistro = document.querySelector('.btnRegistro');
const inputRegistro = document.querySelector('.inputRegistro');
const bienvenido = document.querySelector('.bienvenido');

btnRegistro.addEventListener('click', ()  => {
  if (inputRegistro.value.length === 0){
        

  }else{
    localStorage.setItem('NR', inputRegistro.value);
    window.location.href = 'index.html';
  }
  
      }

)

