//Sexto día de javascript
let listaFrutas = [];
let listaLacteos = [];
let listaCongelados = [];
let listaDulces = [];
let alimentoAgregar;
let alimentoEliminar;
let preguntaPrimera = `Deseas agregar o eliminar alimentos de las listas?
  1. Agregar alimentos
  2. Eliminar alimentos
  3. Salir`;

let preguntaSegunda = `Qué alimento deseas agregar?
  1. Frutas
  2. Lacteos
  3. Congelados
  4. Dulces
  5. Salir`;

let preguntaTercera = `Qué alimento deseas eliminar?
  1. Frutas
  2. Lacteos
  3. Congelados
  4. Dulces 
  5. Salir`;

let opcionPrimera = true;
let opcionSegunda = true;
let opcionTercera = true;
let primeraOpcion;
let segundaOpcion;
let terceraOpcion;
let indiceEncontrado;
let alternativas=[1,2,3,4,5];

while (opcionPrimera) {
  primeraOpcion = prompt(preguntaPrimera);
  if (parseInt(primeraOpcion) == 1) {
    while (opcionSegunda) {
      segundaOpcion = prompt(preguntaSegunda);
      if (parseInt(segundaOpcion) == 1) {
        alimentoAgregar = prompt("Ingrese el alimento").toLowerCase();
        listaFrutas.push(alimentoAgregar);
        console.log(listaFrutas);
      } else if (parseInt(segundaOpcion) == 2) {
        alimentoAgregar = prompt("Ingrese el alimento").toLowerCase();
        listaLacteos.push(alimentoAgregar);
      } else if (parseInt(segundaOpcion) == 3) {
        alimentoAgregar = prompt("Ingrese el alimento").toLowerCase();
        listaCongelados.push(alimentoAgregar);
      } else if (parseInt(segundaOpcion) == 4) {
        alimentoAgregar = prompt("Ingrese el alimento").toLowerCase();
        listaDulces.push(alimentoAgregar);
      } else if (parseInt(segundaOpcion) == 5) {
        opcionSegunda = false;
      } else if (!alternativas.includes(parseInt(segundaOpcion))){
        alert("Ingrese una opción válida");
      }
    }
  } else if (parseInt(primeraOpcion) == 2) {
    while (opcionTercera) {
      terceraOpcion = prompt(preguntaTercera);
      if (parseInt(terceraOpcion) == 1) {
        alert(`Frutas: ${listaFrutas}`);
        alimentoEliminar = prompt(
          "Ingrese el alimento a eliminar"
        ).toLowerCase();
        indiceEncontrado = listaFrutas.indexOf(alimentoEliminar);
        listaFrutas.splice(indiceEncontrado, 1);
      } else if (parseInt(terceraOpcion) == 2) {
        alert(`Lacteos: ${listaLacteos}`);
        alimentoEliminar = prompt(
          "Ingrese el alimento a eliminar"
        ).toLowerCase();
        indiceEncontrado = listaLacteos.indexOf(alimentoEliminar);
        listaLacteos.splice(indiceEncontrado, 1);
      } else if (parseInt(terceraOpcion) == 3) {
        alert(`Congelados: ${listaCongelados}`);
        alimentoEliminar = prompt(
          "Ingrese el alimento a eliminar"
        ).toLowerCase();
        indiceEncontrado = listaCongelados.indexOf(alimentoEliminar);
        listaCongelados.splice(indiceEncontrado, 1);
      } else if (parseInt(terceraOpcion) == 4) {
        alert(`Dulces: ${listaDulces}`);
        alimentoEliminar = prompt(
          "Ingrese el alimento a eliminar"
        ).toLowerCase();
        indiceEncontrado = listaDulces.indexOf(alimentoEliminar);
        listaDulces.splice(indiceEncontrado, 1);
      } else if (parseInt(terceraOpcion) == 5) {
        opcionTercera = false;
      }else if (!alternativas.includes(parseInt(terceraOpcion))){
        alert("Ingrese una opción válida");
      }
    }
  }
  if (parseInt(primeraOpcion) == 3) {
    alert(`   Frutas: ${listaFrutas}
    Lacteos: ${listaLacteos}
    Congelados: ${listaCongelados}
    Dulces: ${listaDulces}`);
    alert("Cerrando la aplicación");
    opcionPrimera = false;
  } else if (!alternativas.includes(parseInt(primeraOpcion))) {
    alert("Ingrese una opción válida");
  }
}
