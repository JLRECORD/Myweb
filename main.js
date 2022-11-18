const v1 = document.querySelector('.v1');
const vistaNueva = document.querySelector('.vistaNueva');

window.addEventListener('scroll', () => {
  let scrol = document.documentElement.scrollTop;

  if (scrol > vistaNueva.offsetTop - 45) {
    vistaNueva.style.width = '110px';

    if (scrol > vistaNueva.offsetTop + 150) {
      v1.style.position = 'fixed';
      v1.style.top = '-120px';
      v1.style.left = '50px';
      v1.style.zIndex = '8';



    } else {
      v1.style.position = 'sticky';
      v1.style.left = '0px';
      v1.style.zIndex = '0';



    }

  } else {
    vistaNueva.style.width = '100%';


    // vistaNueva.style.bottom = '5px';



  }
})
