// Tercer día de programación Javascript
let datos =['Front-End' , 'Back-End'];
let datoFrontend='';
let datoBackend='';
let preguntaMenuInicio = prompt(`Elige el camino a seguir:
  1. Front-End
  2. Back-End`);
let datosInicial=datos[parseInt(preguntaMenuInicio)-1];
let frontend = ["React", "Vue"];
let backend = ["C#", "Java"];

if (preguntaMenuInicio == 1) {
  let preguntaFrontend = prompt(`Escoge entre estas opciones:
    1. ${frontend[0]}
    2. ${frontend[1]}`);
  
  datoFrontend = frontend[parseInt(preguntaFrontend)-1];
} else {
  let preguntaBackend = prompt(`Escoge entre estas opciones: 
    1. ${backend[0]}
    2. ${backend[1]}`);

  datoBackend = backend[parseInt(preguntaBackend)-1];
}
let continuar=true;
let preguntaUltima =
  prompt(`Deseas seguir especializandote en el área o quiere continuar para ser Fullstack. 
  Responde con 1. Especializarme 2. FullStack`);

if (preguntaUltima == 1) {
  while (continuar) {
    let preguntaAdicional = prompt(
      `Qué tecnologías te gustaría especializarte o conocer?`);
    alert(`${preguntaAdicional} es muy interesante!!!`);
    alert(`Serás un programador en ${datosInicial} que aprenderás ${parseInt(preguntaMenuInicio)==1?datoFrontend:datoBackend} ademas de ${preguntaAdicional}`);
    let condicion = prompt(`¿Hay alguna otra tecnología que te gustaría aprender?
    Responde con:
    1. OK
    2. NO`);
    if(condicion==2){
      continuar=false;
    }
  }
}
