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
//Desde donde hasta antes de donde
let bestFriends = amigos.slice(0, 3);
console.log(bestFriends);

//forEach reccorre el array pero no devuelve nada
//No lo mmodifica
let greeatFriends =  amigos.forEach(friend => {
    return 'Your friend is: ' + friend;
})

console.log(greeatFriends);

//Nos devuelve un array con los elementos que cumplan la condiciones
let greatFriendsBetter = amigos.map(friend => {
    return 'Your friend is: ' + friend + ' '+ 'map';
})

console.log(greatFriendsBetter[3]);
console.log(amigos);

/**
 * Arrays -Ciclos
 */

//filter nos sirve para filtrar contenido
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let parents = numeros.filter(n => n % 2 === 0 ? n : null);
console.log(parents);