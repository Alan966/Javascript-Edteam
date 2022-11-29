//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => alert(e.target.textContent);

const event = document.getElementById("event")
event.addEventListener("click", red)