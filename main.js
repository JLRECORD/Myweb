var btn = document.querySelector('.crear');
var ulLista = document.querySelector('.lista');
var tInt = document.querySelector('.tInt');



function deletee() {
   var borrar = document.createElement('h1');
   
   borrar.textContent = 'X';
   
   borrar.addEventListener('click', (e) => {
  var item = e.target.parentElement;
  
   ulLista.removeChild(item);
     
   });
   
   return borrar;
 }
 



 




btn.addEventListener('click', (e) => {
  if (tInt.value === ''){
    }else{
    

      
    var li = document.createElement('li');
  var p = document.createElement('p');
  ulLista.prepend(li);
  

  
  li.prepend(p);
      li.prepend(deletee());

  
  
  p.setAttribute('class', 'lis');
  p.innerHTML = tInt.value;
  tInt.value = "";
  
  
    }
});

 
 




//PRUEBAS



var ob = {
  name: 'jorge',
  edad: 31,
  trabajo: () => {return `${ob.name} de ${ob.edad} años es campesino`}
}

console.log(ob.trabajo());



class Persona{
  constructor(nombre, edad, trabajo){
    this.nombre = nombre;
    this.edad = edad;
    this.trabajo = trabajo;
  }
  
  get getNombre(){
    return this.nombre;
  }
  
    get getEdad(){
    return this.edad;
  }
  
    get getTrabajo(){
    return this.trabajo;
  }
  
  Unir(){
    return `Soy ${this.nombre} de ${this.edad} años y trabajo de ${this.trabajo}`
  }
}

var per = new Persona('Jorge luis', 31, 'Campesino');


console.log(per.getNombre, per.getEdad, per.getTrabajo, per.Unir());

var Str = JSON.stringify(per);
localStorage.setItem('obj1', Str);


 var ob2 = JSON.parse(localStorage.getItem('obj1'));

console.log(ob2);

 
var caja = document.querySelector('.header');

// caja.removeChild(btn);
