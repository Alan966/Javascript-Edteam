/**Condicionales */

/**
 * Invitacion a una fiesta
 *
 *Si eres mayor de dad y menor de 65 años puedes venir a la fiesta
 */

 let edad = 18;

 if(edad >= 18 && edad < 65){
        console.log('Puedes venir a la fiesta');
 }else{
        console.log('No puedes venir a la fiesta');
 }

/**
 *Si eres mayor de edad o tienes permiso de tus papas y menor de 65 años puedes venir a la fiesta
 *
 */

let joven = {
    nombre: 'Juan',
    edad: 17,
    permiso: true
}
let venir

if(joven.edad >= 18 && joven.edad <65){
    venir = true;
}else if(joven.edad >= 18 || joven.permiso){
    venir = true;
}else{
    venir = false;
}

if(venir) console.log('Puedes venir a la Party') //alert('Puedes venir a la fiesta');


// Switch;
let day = 'Lunes';
let dia_fiesta
switch(day){
    case 'Lunes':
        dia_fiesta = `Hoy ${day} No es fiesta`;
    break;
    case 'Martes':
        dia_fiesta = `Hoy ${day} No es fiesta`;
    break;
    case 'Miercoles':
        dia_fiesta = `Hoy ${day} No es fiesta`;
    break;
    case 'Jueves':
        dia_fiesta = `Hoy ${day} No es fiesta`;
    break;
    case 'Viernes':
        dia_fiesta = `Hoy ${day} es fiesta`;
    break;
    case 'Sabado':
        dia_fiesta = `Hoy ${day} No es fiesta`;
    break;
    case 'Domingo':
        dia_fiesta = `Hoy ${day} No es fiesta`;
    break;
    default:
        dia_fiesta = `No es un dia valido ${day}`;
}

console.log(dia_fiesta);

// Ciclo For

/**
 * CICLOS
 * BUCLES O LOOPS
 */

let suegras = ["Delfina","Maria","Itzel"]

for(let i = 0; i < suegras[0].length; i++ ){
    console.log(suegras[i][i]);
}