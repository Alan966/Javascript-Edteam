import Curso from "./clases/Curso.JS";
import Profesor from "./clases/Profesor.JS";
import Alumno from "./clases/Alumno.JS";

const formulario = document.getElementById("formCursos")
const curso = document.querySelector(".ed-grid");
const ArrayCursos = [
    // {
    //     nombre :"HTML desde cero",
    //     poster:"https://borjaarandavaquero.com/wp-content/uploads/2021/07/que-es-html.jpg",
    //     clases: 10
    // },
    // {
    //     nombre : "CSS desde cero",
    //     poster :"https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
    //     clases :8
    // },
    // {
    //     nombre : "JavaScript desde cero",
    //     poster :"https://conceptodefinicion.de/wp-content/uploads/2017/10/Javascript2.jpg",
    //     clases : 12
    // },
    // {
    //     nombre :"REACT desde cero",
    //     poster:"https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png",
    //     clases: 9
    // },
    // {
    //     nombre : "NODE JS desde cero",
    //     poster :"https://midu.dev/images/tags/node.png",
    //     clases :6
    // },
    // {
    //     nombre : "Redux desde cero",
    //     poster :"https://scriptverse.academy/img/tutorials/reactjs-redux.png",
    //     clases : 9
    // }
]

formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    let newCurso = new Curso(
    target.nombreCurso.value,
    target.nombrePoster.value,
    target.numeroClases.value
    )
    curso.appendChild(createCard(newCurso))
})

let cursos = ArrayCursos.map(curso => {
    return new Curso(curso.nombre, curso.poster, curso.clases)
})
const createCard = curso => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}">
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h1 class="t5 s-mb-2 s-center">
            ${curso.getNombre()}
        </h1>
    </div>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <span class="small">Este curso tiene ${curso.getClases()} clases</span>
      </div>
    </div>
    `
    return card
}

let ElementCources = cursos.map(course => createCard(course))

ElementCources.forEach(element => {
    curso.appendChild(element)
})

let beto = new Alumno("Beto","Quiroga", "Correo", true, ["REACT", "HTML"], 10);
let javier = new Alumno("Javier","Guzman", "Correo", true, ["REACT", "HTML"], 10);
let alexys = new Profesor("Alexys", "Lozada", "alexys@ed.team", true, ["BD", "JAVA"], 10)

const html = new Curso("HTML desde cero", "https://borjaarandavaquero.com/wp-content/uploads/2021/07/que-es-html.jpg", 10)
html.setInscritos([...html.getInscritos(),beto])
html.setInscritos([...html.getInscritos(),javier])
console.log(html)