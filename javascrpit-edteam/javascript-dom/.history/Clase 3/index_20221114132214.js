// DOM Traversing

const parent = document.getElementById('parent')

//Hijos
//childNodes nosa devulve todos los nodos hijos
//children nos devuelve todos los elementos hijos
// firstChild nos devuelve el primer nodo hijo
// firstElementChild nos devuelve el primer elemento hijo
// lastChild nos devuelve el ultimo node hijo
// lastElementChild nos devuelve en ultimo elemento hijo
// hastChildNodes() nos devuelve true si tiene hijos
// console.log(parent.hasChildNodes())

const grandson2 = document.getElementById('grandson-2')
const grandson3 = grandson2.nextElementSibling
//Hermanos
//nextSibling
//nextElementSibling
//previousSibling
//previousElementSibling


//Padres
//parentNode
//parentElement
console.log(grandson2.parentNode)

const newElement = document.createElement('div')
newElement.textContent = 'Soy un nuevo elemento'

console.log(parent)
parent.insertBefore(newElement, grandson2)

// parent.appendChild(newElement)

// parent.insertBefore(nuevo, hijo)
