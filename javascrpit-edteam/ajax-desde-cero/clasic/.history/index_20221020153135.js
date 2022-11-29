const btn = document.getElementById("btnLoad");
const dataContainer = document.getElementById("data-container")

// btn.addEventListener("click", evt => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://localhost:8080/tabla.html", true);


//     // Que debe hacer?
//     xhr.addEventListener("load", e => {
//         dataContainer.innerHTML = e.target.responseText;
//     })

//     //Ejecutamos la peticion
//     xhr.send();
// })

//FETCH
btn.addEventListener("click", evt => {
    fetch("http://localhost:8080/tabla.html")
        .then(response => response.text())
        .then(html => {
            dataContainer.innerHTML = html;
        })
        .catch(err => {
            console.log('There is an error'+ err);
        })
})