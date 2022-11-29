//  El DOM
//
//  Document Object Model
// Todo el html es un docuemnto
//  Model es todo la estructura del documento
// En HTMl toda etiqueta es un objeto
// El Dom parte del Objeto Document
// Document es una variable global que contiene todo el documento en la pagina web
// El DOM es el objeto que manipula el documento
//
//

/**
 * document.links para obtener los links de una pogina
 * document.image todas las imagenes
 * Son formas de obtener elementos del DOM
 * document
 * document.doctype
 * document.document.documentElement
 *
 * document.head
 * docuemnt.charset
 * document.title
 *
 * document.body
 * document.links
 * document.images
 * document.getSelection()
 * docuemnt.toString()
 *
 * document.scripts
 * document.styleSheets
 *
 * Para seleccionar
 * document.getSelection().toString()
 */


//Nodos Documento de objetos en el documento
/**
 * El Dom no es parte de la especificacion de javascript
 * El DOM es una webapi que se consume con javascript
 * Cuando hablamos de DOM Hablamos de nodos
 * Nodo es cada eiqueta html, cada texto,
 *  EL DOM three es un arbol es un nodo y los nodos pueden ser equiquetas atributos, texto, comentarios, etc...
 */
/**
 * $0 inbocas un elemento
 * $0.nodeType devuelve un valor
 * $0.nodeName nos devulve en nombre del nodo
 *
 * Un elemento es toda etiqueta html, (elemento etiqueta html)
 * $0.NodeType = un numero
 * 1.- Elemento
 * 2.-Atributo
 * 3.-Texto
 * 4.-Comentario
 */

/**Seleccionar Nodos
 *
 *document.getElemntById("id") seleccionar un elmento por id
*/

const document = document.getElementById("byid");
document.style.background = "red";
