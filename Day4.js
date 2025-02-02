// Cuarto día de programación Javascript
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroMaximo = 10;
let intentosMaximo = 3;
let intentos = 0;
let valor = true;
console.log(numeroSecreto);
while (valor) {

  numeroIngresado = prompt(
    `Cuál es el número secreto que va desde 1 al ${numeroMaximo}`);
   if(numeroIngresado!=numeroSecreto){
    alert('El numero ingreso no es el numero secreto');
    intentos++;
    if(intentos==intentosMaximo){
      alert(`Lo siento, alcanzastes el máximo de intentos, el número secreto era ${numeroSecreto}`);
      valor=false;
    }
   }else {
    intentos++;
    alert(`Acertastes, el número secreto era ${numeroSecreto} y lo hicistes en ${intentos} ${intentos==1? 'intento':'intentos'}`);
    valor=false;
   }
}

