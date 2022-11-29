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

if(venir) alert('Puedes venir a la fiesta');
