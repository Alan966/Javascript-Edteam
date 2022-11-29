//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const red = e => alert(e.target.textContent? e.target.textContent : e.target.value);

const evento= document.getElementById("event")
// event.addEventListener("click", red)
evento.addEventListener("click", event)
