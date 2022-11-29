/**
 * Objeto window el objeto de mas alto nivel en el navegador objeto global
 * Objetos
 *   console.log
 *   navigator info sobre el navegador
 *   location info sobre la url
 *   history historial
 *   screen alto y ancho
 * Metodos
 *  open() abrir una nueva instancia con algunos parametros
 *  close() solo se puede abrir en ventanas que se abran con close
 *  alert(message)
 *  confirm(message)
 * prompt(message)
 * Javascript en el navegador
 * 1.El DOM
 * 2.lOS EVENTOS
 * 3.Recorrer y transformar el DOM
 * 4.El navegador
 */

//Para cancelar algo
let userResponse = confirm('Estas seguro')
if(userResponse){
    alert('el usuario esta seguro')
}else{
    alert('el usuario no esta seguro')
}

let userAge = prompt('Cual es tu edad')
alert(`La edad del usuario es ${userAge}`)

// window.open('https://www.google.com','_blank','width=400,height=400')

const form = document.getElementById('form')

if(form){
    form.addEventListener('submit', () => {
        let width = form.querySelector('##width'),
            height = form.querySelector('##height'),
            url = form.querySelector('##url')
        if(width && height && url){
            width = width.value,
            height = height.value,
            url = url.value
    }

    window.open(url, url, `width=${width},height=${height}`)

})
}