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
addEventListener('change', e => {
    console.log(e.target.checked)
})