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
const primerHijo = document.createElement('div')
primerHijo.classList.toggle('insert-element')
primerHijo.textContent = 'Soy el primer Hijo'
element.insertAdjacentElement('afterbegin', primerHijo)
const hermanoAnterior = '<div class="insert-element">Hermano Anterior</div>'
element.insertAdjacentHTML('beforebegin', hermanoAnterior)
let ultimoHijo = document.createElement('div')
ultimoHijo.classList.toggle('insert-element')
ultimoHijo.innerHTML = '<span>Soy el ultimo hijo</span>'
element.insertAdjacentElement('beforeend', ultimoHijo)
const hermanoSigueinte = '<div class="insert-element">Hermano Siguiente</div>'
element.insertAdjacentHTML('afterend', hermanoSigueinte)

//Remplazando Hijos
// replaceChild(newChild, oldChild)

const hijoremplazo = document.createElement('div')
hijoremplazo.classList.toggle('insert-element')
hijoremplazo.textContent = 'Soy el hijo que remplazo'
element.replaceChild(hijoremplazo, primerHijo)

//Metodos de Jquery
// JQuery like
//before() hermano anterior
//after() hermano siguiente
//prepend() primer hijo
//append() ultimo hijo
//child.remplaceWith(remplazo)

const jquery = document.getElementById('jquery')
const primerjquery = document.createElement('p')
primerjquery.classList.toggle('jquery')
primerjquery.textContent = 'Soy el primer hijo'
jquery.prepend(primerjquery)
const ultimojquery = document.createElement('p')
ultimojquery.classList.toggle('jquery')
ultimojquery.textContent = 'Soy el ultimo hijo'
jquery.append(ultimojquery)

const hermanoAnteriorJquery = document.createElement('p')
hermanoAnteriorJquery.classList.toggle('jquery')
hermanoAnteriorJquery.textContent = 'Soy el hermano anterior'
jquery.before(hermanoAnteriorJquery)
const hermanoSiguientejQuery = document.createElement('p')
hermanoSiguientejQuery.classList.toggle('jquery')
hermanoSiguientejQuery.textContent = 'Soy el hermano siguiente'
jquery.after(hermanoSiguientejQuery)

const remplazojQuery = document.createElement('p')
remplazojQuery.classList.toggle('jquery')
remplazojQuery.textContent = 'Soy el hijo que remplazo'
primerjquery.replaceWith(remplazojQuery)

//Clonar y Eliminar Elementos
// cloneNode()
// remove()
/**
 * En una pagina web const newBuyBlock = $0.cloneNode(true)

 */

//CREAR ELEMENTOS
/**
 * Guardar elementos en memoria antes de pintarlos
 */
// createDocumentFragment()


const teachers = ['Alexys', 'Beto', 'Alvaro', 'Daniel', 'Jon']
const teacherList = document.createElement('ul')
const teacherListContainer = document.getElementById('teacherListContainer')
const teacherListFragment = document.createDocumentFragment()

teacherListContainer.appendChild(teacherList)

for(let teacher of teachers){
    const teacherItem = document.createElement('li')
    teacherItem.textContent = teacher
    teacherListFragment.appendChild(teacherItem)
}

teacherList.appendChild(teacherListFragment)

const template = document.getElementById('template')
const myNewTemplate = template.content.cloneNode(true)
myNewTemplate.querySelector('h2').textContent= 'EDteam'
myNewTemplate.querySelector('p').textContent = 'Tu futuro te esta esperando'

document.getElementById('content').appendChild(myNewTemplate)

//CSSOM - CSS Object Model
/**
 * style
 * MatchMedia()
 * getComputedStyle()
 * getBoundingClientReact()
 */

const title = document.querySelector('h1')
const description = document.querySelector('p')

title.style.color = 'green'
title.style.flexDirection = 'column'
title.style.backgroundColor = 'gray'

const mediumBP = matchMedia('(min-width: 640px) and (orientation: portrait)')

// Se utiliza para hacer cambios en la parte del yalout hay partes donde css no alcanza ahi se puede utilizar esta media query
const changeColor = () => {
    if(mediumBP.matches){
        document.body.style.backgroundColor = 'red'
    }else{
        document.body.style.backgroundColor = 'yellow'
    }
}

addEventListener('resize', changeColor)
addEventListener('DOMContentLoaded', changeColor)

console.log(getComputedStyle(title).fontSize)