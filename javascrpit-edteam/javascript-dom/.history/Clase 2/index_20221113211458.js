//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => e.target.background = 'red';
const event = document.getElementById("event")
event.addEventListener("click", red)