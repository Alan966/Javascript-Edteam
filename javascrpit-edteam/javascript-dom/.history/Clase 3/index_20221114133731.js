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
console.log(grandson2)
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
let nieto
for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i];
    let hijos = element.hasChildNodes()
    if(hijos){
        nieto = element.firstElementChild
    }
}

const nieto2 = nieto.nextElementSibling

parent.insertBefore(newElement, nieto2)

// parent.appendChild(newElement)

// parent.insertBefore(nuevo, hijo)
