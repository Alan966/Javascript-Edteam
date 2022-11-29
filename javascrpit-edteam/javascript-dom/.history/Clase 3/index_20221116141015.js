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

const grandson2 = document.getElementById('grandsontwo')
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
let hijo

for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i];
    let hijos = element.hasChildNodes()
    if(hijos){
        nieto = element.firstElementChild
        hijo = element
    }
}

const nieto2 = nieto.nextElementSibling

hijo.insertBefore(newElement, nieto2)

// parent.appendChild(newElement)

// parent.insertBefore(nuevo, hijo)

// insertBefore
const post = document.getElementById('post')
const postParagraphs = post.querySelectorAll('p')
const add = document.createElement('div')
add.style.backgroundColor = "green"
add.textContent = 'Soy un ADD'
add.style.margin = "10px"
add.style.width = "6em"
add.style.height = "6em"

const getMiddleChild = element => {
    const childs = element.children,
    l = childs.length,
    i = Math.floor(l / 2)
    return childs[i]
}

const insertBefore = (father, child, add) =>{
    father.insertBefore(add, child)
}

let child = getMiddleChild(post)
insertBefore(post, child, add)

//InsertAdjacent
/**
 * insertAdjacent
 *    Metodos
 *    insertAdjacentElement(position, element)
 *    insertAdjacentHTML(position, html)
 *    insertAdjacentText(position, text)
 * Position
 *   beforebegin  hermano anterior
 *   afterbegin   primer hijo
 *   beforeend    ultimo hijo
 *   afterend     hermano siguiente
 * */

const element = document.getElementById('insert-element')
let primerHijo = document.createElement('div')
primerHijo.setAttribute('class','insert-element')
primerHijo.textContent = 'Soy el primer hijo'
element.insertAdjacentElement("afterbegin", primerHijo)


let hermanoAnterior = '<div class="insert-element">Soy el hermano anterior</div>'
element.insertAdjacentHTML("beforebegin", hermanoAnterior)



