//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => alert(e.target.textContent? e.target.textContent : e.target.value);

const event = document.getElementById("event")
event.addEventListener("click", red)
event.addEventListener("click", event)
