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
