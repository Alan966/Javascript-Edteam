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

console.log(anonimo('Alan'));