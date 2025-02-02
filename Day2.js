// Segundo día de programación Javascript
let nombreUsuario= prompt('¿Cuál es tu nombre?');
let edadUsuario = prompt('¿Cuántos años tienes?');
let lenguajeUsuario = prompt('¿Qué lenguaje de programación estás estudiando?');

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años y ya estás aprendiendo ${lenguajeUsuario}!!!`);

let preguntaExtra = prompt (`¿Te gusta estudiar ${lenguajeUsuario}? Responde con el  número 1 para SÍ o 2 para NO`);
if(preguntaExtra==1){
    alert('Muy bien!!! Sigue estudiando y tendrás mucho éxito.');
} else {
    alert ('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}