var h = 0;
var m = 0;
var s = 0;
const hora = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
minutos.textContent = m;
hora.textContent = h;
segundos.textContent = s;

setInterval(function(){
  if (s === 59){
    s = -1; // Para que al final del bloque termine siendo 0
    m++;
    minutos.textContent = m;
  }
  if (m === 60){
    m = 0;
    h++;
    hora.textContent = h;
    minutos.textContent = m;
  }
  if(h === 24){
    h = 0;
    hora.textContent = h;
  }
  s++;
  segundos.textContent = s;
}, 1000);