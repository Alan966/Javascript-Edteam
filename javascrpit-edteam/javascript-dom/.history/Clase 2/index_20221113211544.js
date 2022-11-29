//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => e.target.style.backgroundColor = 'red'
const event = document.getElementById("event")
event.addEventListener("click", red)