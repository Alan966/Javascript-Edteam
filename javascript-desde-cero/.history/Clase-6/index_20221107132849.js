/**
 * Mettodos de Arrays
 */

//Funciones en programacion funcional
//Metodos en programacion orientada a objetos

let amigos = ["Pedro", "Juan", "Maria", "Jose", "Luis", "Maria"];

// Agregar elementos a mi array
let dato = amigos.push('Ramon');
console.log(dato);

//Elimna el ultimo elemento del array pop()
// Metodos que no modifican el array
let datos = amigos.pop();
console.log(datos);

//Metodo slice para partir el array en 2 arrays
let bestFriends = amigos.slice(0, 2);
console.log(bestFriends);