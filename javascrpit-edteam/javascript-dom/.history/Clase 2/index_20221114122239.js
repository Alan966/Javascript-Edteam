//Eventos
/**
 * Eventos
 * addEventListener()
 *
 * onEvent
 */

const red = e => alert(e.target.textContent? e.target.textContent : e.target.value);

const event = document.getElementById("event")
// event.addEventListener("click", red)
// event.addEventListener("dblclick", red)
// event.addEventListener("mouseover", red)
// event.addEventListener("mouseenter", red)
// event.addEventListener("mouseleave", red)
// event.addEventListener("contextmenu", red)
// event.addEventListener("mousedown", red)
// event.addEventListener("mouseup", red)
// event.addEventListener("mousemove", red)
event.addEventListener("contextmenu", red)
event.addEventListener("contextmenu", e => e.preventDefault())



//Eventos del teclado
 const input = document.getElementById("input")

// input.addEventListener("keydown", red)
 input.addEventListener('keyup', e => {
    console.log(e.key)
    console.log(e.ctrlKey)
    console.log(e.altKey)
 })

 //Funciona en todo el documento
addEventListener('keyup', e => {
    console.log(e.key)
    console.log(e.ctrlKey)
    console.log(e.altKey)
})

//Eventos del formulario
// addEventListener('submit', e => {  Si todos los campos estan llenados

const form = document.getElementById('form')
form.addEventListener('submit', () => {
    console.log('Enviando formulario')
})

const rememberPassword = document.getElementById('remember_password')
rememberPassword.addEventListener('change', e => {
    if(e.target.checked){
        console.log('El usuario quiere recordar su contraseña')
    }else{
        console.log('El usuario no quiere recordar su contraseña')
    }
})

// addEventListener('focus', )   Cuando el usuario esta dentro del input
// addEventListener('blur', )    Cuando el usuario sale del input
// addEventListener('reset')   Cuando resetes el formulario


//Eventos del DOM y del Window
// addEventListener('DOMContentloaded', )   Ocurre cuando el DOM esta listo

// addEventListener('load', )   Ocurre cuando carga toda la pagina tarda mas que DOMContentloaded
// addEventListener('scroll')   Cuando el usuario hace scroll
// addEventListener('resize')   Cuando redimensionas la ventana


//Eventos multiplay
const video = document.getElementById('video'),
    playButton = document.getElementById('play'),
    pauseButton = document.getElementById('pause')

playButton.addEventListener('click', () => {
    video.play()
})

pauseButton.addEventListener('click', () => {
    video.pause()
})