//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => console.log(e.target)
const event = document.getElementById("event")
event.addEventListener("click", red)