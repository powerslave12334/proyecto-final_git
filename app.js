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
  
  }
  if (m === 60){
    
  }
  if(h === 24){
    
  }
  
}, 1000);