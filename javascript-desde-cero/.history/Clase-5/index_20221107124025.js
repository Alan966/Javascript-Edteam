/**
 * FUNCIONES - Parametros
 */

/**
 * bLOQUES DE CODIGO REUTILIZABLES
 * fucniones = acciones
 */

//Delcaracion de una funcion
function hola(nombre){
    if(typeof nombre !== 'string') return console.error('El parametro no es un string');
    console.log(`Hola ${nombre}`);
}

//Invocacion de una funcion
// hola("Marta");
// hola(undefined);

function obtenerNombreCompleto(nombre, apellidos){
    if(typeof nombre !== 'string') return console.error('El parametro nombre no es un string');
    if(typeof apellidos !== 'string') return console.error('El parametro apellidos no es un string');
    return `${nombre} ${apellidos}`;
}

console.log(obtenerNombreCompleto('Alan', 'Guadalupe'));


//Funciones de primera clase
//Todo lo que se almacena en una variable = ciudadanos de primera clase
let completo = obtenerNombreCompleto('Alan', 'Guadalupe');

let nombre = obtenerNombreCompleto
console.log(nombre('Alan', 'Guadalupe'));

//Funciones anonimas

let anonimo  = function (name){
    return `Hola ${name}`;
}

let anonima = (bitch) => {
    return `Hola ${bitch}`;
}
console.log(anonimo('Alan'));
console.log(anonima('Doki'))

//Autoinocvacion de una funcion anonima en JS esto se hace con parentecis

console.log((function(a, b, c){
    return a+b+c
}(1, 2, 3)))

/**
 * Funciones como constantes
 */

const holaMiAmor = (message) => {
    return `Hola mi amor ${message}`
}

console.log(holaMiAmor('Maria'))

/**
 * SCOPE
 * Alcance que tiene ciertas funciones
 */

let maestro = 'Alan'
maestro = 'Juan'


//Las varaibles de una funcion solo existen dentro de la funcion
function saludar(nombre){
    console.log(` Hola ${nombre}`)
}

console.log(saludar('Alan'))