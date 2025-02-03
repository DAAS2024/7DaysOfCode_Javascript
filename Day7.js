//Septimo dia de Javascript
let valorPrimero;
let valorSegundo;
let opcion=true;
let continuar=true;
let menuUsuario;
while(opcion){
menuUsuario =prompt (`Escoja una operacion a realizar
  1. Suma
  2. Resta
  3. Multiplicación
  4. División
  5. SALIR
  `);
switch(parseInt(menuUsuario)){
  case 1:
    valorPrimero=parseInt(prompt('Ingrese primer valor'));
    valorSegundo=parseInt(prompt('Ingrese segundo valor'));
    alert(`La suma es: ${sumarCalculadora(valorPrimero, valorSegundo)}`);
    break;
  case 2:
    valorPrimero=parseInt(prompt('Ingrese primer valor'));
    valorSegundo=parseInt(prompt('Ingrese segundo valor'));
   alert(`la resta es: ${restarCalculadora(valorPrimero, valorSegundo)}`);
    break;
  case 3:
    valorPrimero=parseInt(prompt('Ingrese primer valor'));
    valorSegundo=parseInt(prompt('Ingrese segundo valor'));
    alert(`La multiplicación es: ${multiplicarCalculadora(valorPrimero, valorSegundo)}`);
    break;
  case 4:
    valorPrimero=parseInt(prompt('Ingrese primer valor'));
    valorSegundo=parseInt(prompt('Ingrese segundo valor'));
    while(continuar){
      if(valorSegundo==0){
        alert('Ingrese otro valor distinto de cero');
        valorSegundo=parseInt(prompt('Ingrese segundo valor'));
      }else {
        alert(`La división es: ${dividirCalculadora(valorPrimero, valorSegundo)}`);
        continuar=false;
      }
    }
    break;
    case 5:
      alert('Cerrando aplicación...');
      opcion=false;
      break; 
    default:
      alert('Ingrese una opción válida') ;
}
}

function sumarCalculadora(a,b){
  return a+b;
}
function restarCalculadora(a,b){
  return a-b;
}
function multiplicarCalculadora(a,b){
  return a*b;
}
function dividirCalculadora(a,b){
  return a/b;
}

