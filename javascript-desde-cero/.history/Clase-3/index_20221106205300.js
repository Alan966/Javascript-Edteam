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
const nombres = ['Alan', 'Beto', 'Carlos', 'Daniel'];
//Template Strings
let nombre_completo = `${nombres[3]} ${apellido}`
console.log(nombre_completo);



//Operadores de comparacion
//Igual ==
let uno = 1;
let one = '1';

let igual = uno == one;
console.log(igual);

//Estrictamente igual ===
let estrictamente_igual = uno === one;
console.log(estrictamente_igual);

// Diferente !=
let diferente = uno != one;
console.log(diferente);

// Estrictamente diferente !==
let estrictamente_diferente = uno !== one;
console.log(estrictamente_diferente);

// Mayor que >

one = parseInt(one);
let mayor = uno > one; // false
console.log(mayor);


//Menor que <
let menor = uno < one; // false
console.log(menor);

// Mayor o igual que >=
let mayor_igual = uno >= one; // true
console.log(mayor_igual);

// Menor o igual que <=
let menor_igual = uno <= one; // true
console.log(menor_igual);

//Operadores Logicos
// || OR
// && AND

let mayor_de_edad = 18;
let tercera_edad = 65;
let Joven = {
    edad: 17,
    nombre: 'Pedro'
}
let Adullto = {
    edad: 30,
    nombre: 'Juan'
}

let Abuelo = {
    edad: 65,
    nombre: 'Jose'
}

let edad = Joven.edad;
let edadAdulto = Adullto.edad;
let edadAbuelo = Abuelo.edad;

let jovenEdad = edad <= 18 && edad <65 ? "Es un joven": "No es un joven";
console.log(jovenEdad);

let adultoEdad = edadAdulto >= 18 && edadAdulto <65? "Es un adulto": "No es un adulto";
console.log(adultoEdad);

let abueloEdad = edadAbuelo >18 && edadAbuelo >=65? "Es un abuelo": "No es un abuelo";
console.log(abueloEdad);

let es_adulto_o_se_llama_pedro = edad >= 18 || Joven.nombre === 'Pedro' ? "Se llama pedro" : "No se llama pedro";
console.log(es_adulto_o_se_llama_pedro);


/**
 * Operadores Unarios
 */

let c = 10;
c++;

console.log(c);

c--;
c--;
console.log(c);

/**Operadores Ternarios */

let d = 5;
let e = 8;

let f = d > e ?  `${d} es mayor que ${e}- 1` : `${e} es mayor que ${d}- 2`;
console.log(f);

//Type Coercion
/**
 * Capacidad de poder convertir un tipo de dato en otro tipo de dato
 */

a = 521;
b = '422';

let resp = a - b;

console.log( resp); // Los ve como strings
