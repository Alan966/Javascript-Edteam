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
n = 0
completeNames.forEach(name => {
    if(n > 1 ){
        lastNames.push(name);
    }
    n++
})

console.log(lastNames);

//En javascript una explrecion rejular es una serie de caracteres que simbolizan algo de forma que el lenguaje lo busca

texto = "Alberto Guadalupe Diego";
//Minusculas
dato = texto.toLocaleLowerCase();
console.log(dato);

//Mayusculas
dato = texto.toUpperCase();
console.log(dato);


/**
 * Objetos
 */

let alumno = {
    nombre: "Beto",
    edad: 21,
    genero: "Masculino",
    ciudad: 'CDMX'
}

console.log(alumno.ciudad);
console.log(alumno["genero"]);

//Object el prototipo de los objetos
//Array con sus atributos
var valores = Object.values(alumno);
console.log(valores);

//Keys nos devuelve las llaves de los objetos
var keys = Object.keys(alumno);
console.log(keys);

//Objecto si esta vacio mi objeto
var empty = Object.entries(alumno);
console.log(empty);


//Math and Date;
/**
 *
 */

//Nos devuelve un numero aleatorio
var valor = Math.random();
console.log(valor);