
var p = document.querySelector('p');
// var url = 'http://0.0.0.0:8080/api.php';
var ar = [];
fetch('https://jlrecord.000webhostapp.com/api.php')
.then(item => item.json())
.then(da => {
  console.log(da);
  ar.push(da)
  p.textContent = da.dolar + " / " + da.euro
})

