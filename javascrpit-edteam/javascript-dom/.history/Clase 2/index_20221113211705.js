//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => console.log(e.target.textContent);

const event = document.getElementById("event")
event.addEventListener("click", red)