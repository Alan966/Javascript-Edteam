const usuario1 = {
    // Atributos del objeto
    nombres: "Beto Junior",
    apellidos: "Quispe Mamani",
    edad: 29,
    hermanos: ["Beto", "Junior", "Mamani"],
    correo: "betoed.team",
    activo: true,
    //Metodos del objeto
    presentarse() {
        // This hace referencia al objeto que esta ejecutando el metodo
        console.log(`Hola soy ${this.nombres} ${this.apellidos}`)
    },
    whoIsYourFather() {
        console.log(`Mi padre es ${this.padre.nombre}`)
    }
}

console.log(usuario1)


// Funcion constructora
//Before ES6
// function Usuario(nombres, apellidos, correo, activo){
//     this.nombres = nombres;
//     this.apellidos = apellidos;
//     this.correo = correo;
//     this.activo = activo;
// }
class Usuario {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
            this.apellidos = apellidos,
            this.correo = correo,
            this.activo = activo
    }

    presentarse() {
        return `Hola soy ${this.nombres} ${this.apellidos}`
    }
    getApellidos() {
        return this.apellidos
    }
    getNombres() {
        return this.nombres
    }
    getCorreo() {
        return this.correo
    }
    getActivo() {
        return this.activo
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos
    }
    setNombres(nombres) {
        this.nombres = nombres
    }
    setCorreo(correo) {
        this.correo = correo
    }
    setActivo(activo) {
        this.activo = activo
    }

    //Metodos getters y los setters
    //Get = Obtener
    //Set = Establecer
}

//Herencia
//Poder extender las caracteristicas de una clase a otra
class Profesor extends Usuario {
    constructor(nombres, apellidos, correo, activo, cursosDictados, calificacion) {
        super(nombres, apellidos, correo, activo)
        this.cursosDictados = cursosDictados
        this.calificacion = calificacion
    }
}

class Alumno extends Usuario {
    constructor(nombres, apellidos, correo, activo, cursosTomados) {
        super(nombres, apellidos, correo, activo)
        this.cursosTomados = cursosTomados
    }
}

let beto = new Alumno("Beto", "Quiroga", "Correo", true, ["REACT", "HTML"], 10);  //Instanciar un objeto
let alexys = new Profesor("Alexys", "Lozada", "alexys@ed.team", true, ["BD", "JAVA"], 10)

//beto y alexys son Instancias de la clase Usuario
console.log(beto)


//Hay dos tipos de metodos

//Es mala practica acceder a los atributos de un obeto de manera directa
console.log(beto.getApellidos())
beto.setNombres("Jaime")
console.log(beto.getNombres())


// Resumen
// Abstraccion poder entender algo dle mundo real
// Objetos son la abstraccion que llevamos a codigo de tal manera con atributos y metodos
// Atributos son las caracteristicas de un objeto
// Metodos son las acciones que puede realizar un objeto
// Funcion constructora es un molde para crear objetos
// Clases esos molde se pueden crear con clases
// Metodo constructor se ejecuta dentro de una clase recibe los atributos necesarios para generar y crear un objeto con dichos atributos
//Getters and setters
//Getters poder acceder a los atributos de un objeto
//Setters poder establecer los atributos de un objeto

//Herencia es la capacidad que tiene las clases de poder extenderse un hijo puede extender las caracteristicas de un padre
//super() podemos crear un objeto de dicha clase con el metodo super este recibe los atributos de la clase de la cual estamos extendiendo