/**
 * Operadores de Javascript
 */

// Operadores de Asignacion
let alumno
let profe = "Juan";
alumno = "Beto";

alumno = profe

/**
 * Operadores Aritmericos
 */
// Operaciones aritmeticas basicas
// + suma,  - resta,  * multiplicacion,  / dividion,  % reciduo
let cincuenta = 50;
let sesenta = 60;
let operacion = cincuenta + sesenta;
console.log(operacion);

let resta = cincuenta - sesenta;
console.log(resta);

let multiplicacion = 5*sesenta;
console.log(multiplicacion);

let trecientos = 300;
let division =  trecientos/ sesenta
console.log(division);

let cinco = 5;
let diecinueve = 19;
let residuo = diecinueve % cinco
console.log(residuo);

let a = 10
let b = 4
a = a + b
console.log(a);

a -= b
a *= b
console.log(a);


// Exponencial
a = 5
b = 3
a**=b
console.log(a);

// Operadores de concatenacion
// (+) siver para hacer operaciones con textos
let nombre = 'Alan';
let apellido = `Guadalupe`;

const NOMBRE_COMPLETO = nombre + ' ' + apellido;
console.log(NOMBRE_COMPLETO);
let nombres = ['Alan, Beto, Carlos, Daniel'];
//Template Strings
let nombre_completo = `${nombres[0]} ${apellido}`
console.log(nombre_completo);

