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
 *  close() solo se puede abrir en ventanas que se abran con close
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
// let userResponse = confirm('Estas seguro')
// if(userResponse){
//     alert('el usuario esta seguro')
// }else{
//     alert('el usuario no esta seguro')
// }

// let userAge = prompt('Cual es tu edad')
// alert(`La edad del usuario es ${userAge}`)

// window.open('https://www.google.com','_blank','width=400,height=400')

// const form = document.getElementById('form-test')

// if(form){
//     form.addEventListener('submit', () => {
//         let width = form.querySelector('#width'),
//             height = form.querySelector('#height'),
//             url = form.querySelector('#url')
//         if(width && height && url){
//             console.log(width.value, height.value, url.value)
//             width = width.value,
//             height = height.value,
//             url = url.value
//     }

//     window.open(url, url, `innerWidth=${width},innerHeight=${height}`)

// })
// }

//Objeto Location
// Propiedades
// href url actual , se puede cambiar para cambiar la pagina actual
// host dominio
//hostame domino:puerto
//port puerto
//protocol protocolo (http, https)
//origin protocolo + dominio
// hash #
// pathname ruta interna luego del dominio

/**
 * Metodos
 * reload() recargar la pagina
 * assign(url)
 * remplace(url)
 * cambia la pagina actual sin guardar en history
 */

/**
 * location.href = 'https://www.google.com'
 * location.host devuelve el dominio
 * document.links devuelve todos los links de la pagina
 *  location.hostname deulve el dominio y el puerto
 * location.port devuelve el puerto
 * location.protocol devuelve el protocolo http o https
 * location.origin devuelve el protocolo + dominio
 * location.hash devuelve el hash de la url
 * location.pathname devuelve la ruta interna luego del dominio
 */

/**
 * Metodos
 * reload() recarga la pagina
 * assign('gogle.com') cambia la pagina actual
 * remplace('google.com') cambia la pagina actual sin guardar en history
 */

/**
 * Objeto History
 * conteien el objeto de navegacion d el a pestaña
 * history
 * history.back() ir a la pagina anterior
 * history.forward() ir a la pagina siguiente
 *
 *
 * Objeto Navigator
 * navigator
 */


/**4.6 Timers
 * setTimeout(callbacks, ms)
 * setInterval(callbacks, ms)
 */

setTimeout(() => {
    console.log('Hola mundo')
}, 1000)

let contador = 0
const saludar = setInterval(() => {
    contador++
    if(contador > 1){
        console.log(`Hola ${contador} veces`)
    }else{
        console.log(`Hola ${contador} vez`)
    }

    if(contador === 5){
        clearInterval(saludar)
    }
}, 1000)

console.log(new Date().toDateString())

const clock =  document.getElementById('clock')
setInterval(() => {
   if(clock){
    clock.textContent = new Date().toLocaleTimeString()
   }
},1000)

//Objeto Date
//Instanciar un obeto Date
 // new Date()
 // new Date(year, month,day)
 //new Date(year, month, day, hours, minutes, seconds)
 //new Date(string)

//  const aniversario = new Date(2000, 4, 21,20, 12)
 const aniversario = new Date('May 21 2018 18:07:28 GMT-0500')
 console.log(aniversario)

 /**
  * Metodos
  * getFullYear()
  * getMinutes()
  * getSeconds()
  * getDate()
  * getDay()
  * getMonth()
  * getTime()
  * Milisegundos desde el 1 de enero 1970
  * getTimezoneOffset()
  */

 //La diferencia entre la zona horaria y mi zona horaria sumar para la zona horaria internacional
 const timeZoneOffset = new Date().getTimezoneOffset()
 console.log(timeZoneOffset)

 //getTime() nos devuelve los milisegundos desde el 1 de enero de 1970

 const now = new Date(2018, 4, 21)
 console.log(now.getTime())

 const getsecond = ms => Math.round(ms/ 1000)
 const getMinutes = ms => Math.round(getsecond(ms) / 60)