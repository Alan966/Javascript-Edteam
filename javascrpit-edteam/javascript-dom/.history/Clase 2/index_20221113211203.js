//Eventos
/**
 * Eventos
 * addEventListener()
 * onEvent
 */

const event = document.getElementById("event")
event.addEventListener("click", e => {
    e.target.style.background = "red"
})