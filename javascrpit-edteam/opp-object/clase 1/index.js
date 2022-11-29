/**
 * Clase teorica de la programacion orientada a objetos
 *
 *PARADIGMAS DE PROGRAMACION
 * Es un estandar para la realizacion de tares para
 * llegar al objetivo
 * EJ. Ser un gran futbolista
 * 1.-Comer sano
 * 2.- Ejercitar todos los dias por mas de 6 horas
 * Tener unac condicion atletica
 * Tener un buen repeesentante
 * etc.
 * PARADIGMAS DE PROGRAMACION
 * Es un conjunto de practicas y tareas que determinan
 * la forma en la que esta estructurado un software y
 * como este cumple con su objetivo
 *
 *PARADIGMAS DE PROGRAMACION
 *Estructurado se va ejecutando es decir conforme va el archvio se va ejecutando este cuenta conun inicio y un final
 *Funcional En base a funciones declaras que puede hacer tu softaware y con forme van llegando los datos se va ejecutando
 * Imperativo Es un conjunto de instrucciones que se ejecutan de forma secuencial
 * Declarativo es un conjunto de instrucciones que se ejecutan de forma secuencial
 * Orientado a objetos
 */

 /**
  * La programacion orientada a objetos forma en que se escribe un software de forma de abstaer objetos y llevarlos
  * a codigo
  * La base de la POO es la ABSTRACCION
  * ¿Que es la abstraccion?
  * Representar un objeto de la vida real en codigo
  */

 /**
  * Caso Edteam
  * -Curso
  * -Alumnos
  * -Profesores
  * -Material
  */

 /**
  * Abstraccion: Curso
  * -Nombre del curso
  * -Poster
  * -Fecha de inicio
  * -Precio
  *
  * Estos son los atributos de un curso
  */

 /**
  * Abstraccion: Alumno
  * Nombres
  * Apellidos
  * Correo electornico
  * Pais
  */

 /**
  * Como representar eso en javascript con Objetos literales
  */


 //Objetos Literales

 const alumno = {
    nombres: "Beto Junior",
    apellidos: "Quispe Mamani",
    edad: 29,
    hermanos: ["Beto", "Junior", "Mamani"],
    padre: {
        nombre: "Humberto",
        edad: 62
    }
 }

//  console.log(alumno.nombres)
console.log(alumno["padre"].nombre)

/**
 * Los objetos pueden contener atributos que a su vez puedne contener cualquier tipo de datos
 */


/**
 * Asignacion de atributos
 * Un objeto al ser una constante solo sofre modificaciones a sus atributos
 */

// alumno.genero = "Masculino"

console.log(alumno)

alumno["genero"] = "Masculino"
alumno.edad = 20
console.log(alumno)


/**
 * Notacion ES6
 * Podemos construir un objeto a partir de otras variables
 */

const nombre = "Beto"
const apellido = "Quispe"
const edad = 30
const padre = {
    nombre: "Ramiro",
    edad: 15
}

alumno.nombres = nombre
alumno.apellidos = apellido
alumno.edad = edad
alumno.padre = padre
console.log(alumno)

/**
 * Objetos literales
 * Atributos
 * Son las caracteristicas de un objeto
 * Metodos
 * Son las acciones que puede realizar un objeto
 */

 const alumito = {
    // Atributos del objeto
    nombres: "Beto Junior",
    apellidos: "Quispe Mamani",
    edad: 29,
    hermanos: ["Beto", "Junior", "Mamani"],
    padre: {
        nombre: "Humberto",
        edad: 62
    },

    //Metodos del objeto
    presentarse(){
        // This hace referencia al objeto que esta ejecutando el metodo
        console.log(`Hola soy ${this.nombres} ${this.apellidos}`)
    },
    whoIsYourFather(){
        console.log(`Mi padre es ${this.padre.nombre}`)
    }
 }