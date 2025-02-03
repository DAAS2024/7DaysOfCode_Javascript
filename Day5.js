// Quinto día de programación Javascript
let listaFrutas = [];
let listaLacteos = [];
let listaCongelados = [];
let listaDulces = [];
let alternativas = [1, 2, 3, 4];
let valor = true;
let opcion=true;
let cadenaListaFrutas='Frutas: ';
let cadenaListaLacteos='Lacteos: ';
let cadenaListaCongelados='Congelados: ';
let cadenaListaDulces='Dulces: ';
let cadenaPregunta = `
1. Frutas
2. Lácteos
3. Congelados
4. Dulces
5. Salir`;
let segundaPregunta;
while(opcion){
let primeraPregunta = prompt(`Deseas agregar un alimento a tu lista de compras?
  1. SI
  2. NO`);
if(primeraPregunta!=2&&primeraPregunta<2){
  while(valor){
    segundaPregunta=prompt('Qué alimento deseas agregar?' +
      cadenaPregunta);
      if(segundaPregunta==5){
        valor=false;
      }else{
    alimentoIngresado = prompt('Ingrese el alimento');
    switch(parseInt(segundaPregunta)){
      case 1:
      listaFrutas.push(alimentoIngresado);
      break;
      case 2:
      listaLacteos.push(alimentoIngresado);
      break;
      case 3:
      listaCongelados.push(alimentoIngresado);
      break;
      case 4:
      listaDulces.push(alimentoIngresado);
      break;
      case 5:
        valor=false;
      default:
      alert('Ingrese una opción válida del 1 al 5');
      break;
    }
  }
  }
}else if (primeraPregunta==2){
  alert('Cerramos la aplicación');
  opcion=false;
}else {
  alert('Por favor ingrese una opción válida');
}
}

if(listaFrutas.length>0){
  for(let i=0; i<listaFrutas.length; i++){
    cadenaListaFrutas+=listaFrutas[i] + ' ';
  }
  console.log(cadenaListaFrutas);
}else {
  console.log(cadenaListaFrutas);
}

if(listaLacteos.length>0){
  for(let i=0; i<listaLacteos.length; i++){
    cadenaListaLacteos+=listaLacteos[i] + ' ';
  }
  console.log(cadenaListaLacteos);
}else {
  console.log(cadenaListaLacteos);
}
if(listaCongelados.length>0){
  for(let i=0; i<listaCongelados.length; i++){
    cadenaListaCongelados+=listaCongelados[i] + ' ';
  }
  console.log(cadenaListaCongelados);
}else {
  console.log(cadenaListaCongelados);
}
if(listaDulces.length>0){
  for(let i=0; i<listaDulces.length; i++){
    cadenaListaDulces+=listaDulces[i] + ' ';
  }
  console.log(cadenaListaDulces);
}else {
  console.log(cadenaListaDulces);
}
    
  

