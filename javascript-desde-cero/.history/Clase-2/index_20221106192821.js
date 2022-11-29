// Comentarios Lineas de codigo no interpretadas por el navegador
// 1.-Comentarios de Bloque
   /*let hola = "Hola Mundo";
    console.log(hola); */

// 2.-Comentarios de Linea
    //let hola = "Hola Mundo";
    //console.log(hola);

    /**
     *  Este es una forma de hacer comentadiros
     * De una forma estandar mas elegante
     *
     */


//Tipos de Datos
//typeof
// 1..String - Cadena de Texto
// Hat 3 formas de escribir string
// "Hola Mundo"
// 'Hola Mundo'
// `Hola Mundo`
console.log(typeof "Hola Mundo");

// 2.-Number - Para todos los tipos de numeros enteros y decimales
  console.log(typeof 50.4);

// 3.-Boolean - true o false
console.log(typeof true);

// Tipos de Datos - Coleccion de Datos
// 4.-Array - Coleccion de Datos
let nombres = ["Maria", "Nicol", "Sofia", "Maria", "Talia"];
console.log(typeof nombres);

// 5.- Object - Coleccion de Datos
let personas = {
    nombre: "Maria",
    apellido: "Perez",
    edad: 20,
    hijos: ["Nicol", "Sofia", "Maria", "Talia"],
}

console.log(typeof personas);
/**
 * Objectos en Jvascript
 * (informacion) que tienen un identificador y valor
 */

// 6.- Null - Valor nulo
let nulo = null;
console.log(typeof nulo);

// 7.- Undefined - Valor indefinido existe pero no es reconocido
let indefinido;
console.log(typeof indefinido);

//Variables - Espacios recervados en memoria para guardar datos y poder utilizarlos despues

// 1.- Var - Variable Global
//Declaracion de una variable
var nombre
console.log(nombre); // Es indefinido por que no tiene valor

//Delcaracion variable
let alumno
console.log(alumno); // Es indefinido por que no tiene valor

//Asifnacion de valores a la variable
alumno = "Maria";

nombre = alumno;
// Reasignacion
alumno = "Nicol";
console.log(nombre);
console.log(alumno);

//Declaracion de una variable y asignacion de valor
let apellido = "Perez";
console.log(apellido);


//Asignacion por referencia
let proferor = "Juan";
let alumnado = proferor

proferor = "Pedro";
console.log(alumnado);
console.log(proferor);
/**Constrantes */
// 2.- Const - Constante
// Declaracion de una constante
const PI = 3.1416;
console.log(PI);