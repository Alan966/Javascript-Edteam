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
hola("Marta");
hola(undefined);