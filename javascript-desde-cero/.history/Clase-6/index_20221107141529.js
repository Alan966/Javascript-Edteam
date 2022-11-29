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

let parents = numeros.filter(n => n % 2 === 0);
console.log(parents);


//Find devuelve el primero en cumplir la condicion
let find = numeros.find(n => n >7)
console.log(find);


//includes nos devuelve un booleano si existe o no
//debe ser si lo incluye no si es mayor o menor solo si lo incluye
let includes = numeros.includes(5);
console.log(includes);

//some si almenos un elemento cumple la condicion
let some = numeros.some( n => n >= 10);
console.log(some);

//every que todos los elementos cumplan la condicion
let every = numeros.every(n => n <= 10);
console.log(every);

//Metodos strings

//Slice lo que es de donde a donde seleccionar
let texto = "Este es un string"
let esto = texto.slice(0,4);

console.log(esto);


//Metodo split didive el texto en un array
let completeName = "Juan Rufindo Perez Perez";
let completeNames = completeName.split(' ');
var names = [];
var lastNames = [];
let n = 0
completeNames.forEach(name =>{
    if(n < 2)names.push(name);
    n++;
});

console.log(names);
completeNames.forEach(name => {
    if(n > 2 ) lastNames.push(name);
    n++
})

console.log(lastNames);