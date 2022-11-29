/**
 * Objeto window el objeto de mas alto nivel en el navegador objeto global
 * Objetos
 *   console.log
 *   navigator info sobre el navegador
 *   location info sobre la url
 *   history historial
 *   screen alto y ancho
 * Metodos
 *  open() abrir una nueva instancia con algunos parametros
 *  close()
 *  alert(message)
 *  confirm(message)
 * prompt(message)
 * Javascript en el navegador
 * 1.El DOM
 * 2.lOS EVENTOS
 * 3.Recorrer y transformar el DOM
 * 4.El navegador
 */

//Para cancelar algo
let userResponse = confirm('Estas seguro')
if(userResponse){
    alert('el usuario esta seguro')
}else{
    alert('el usuario no esta seguro')
}

let userAge = prompt('Cual es tu edad')
alert(`La edad del usuario es ${userAge}`)

window.open('https://www.google.com','_blank','width=400,height=400')