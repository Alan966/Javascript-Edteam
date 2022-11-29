
export default class Usuario{
    constructor(nombres, apellidos, correo, activo){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    presentarse(){
        return `Hola soy ${this.nombres} ${this.apellidos}`
    }
    getApellidos(){
        return this.apellidos
    }
    getNombres(){
        return this.nombres
    }
    getCorreo(){
        return this.correo
    }
    getActivo(){
        return this.activo
    }

    setApellidos(apellidos){
        this.apellidos = apellidos
    }
    setNombres(nombres){
        this.nombres = nombres
    }
    setCorreo(correo){
        this.correo = correo
    }
    setActivo(activo){
        this.activo = activo
    }

    //Metodos getters y los setters
    //Get = Obtener
    //Set = Establecer
}