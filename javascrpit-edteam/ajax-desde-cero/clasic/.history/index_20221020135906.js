const btn = document.getElementById("btnLoad");
const dataContainer = document.getElementById("data-container")

btn.addEventListener("click", evt => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/tabla.html",true );


    // Que debe hacer?
    xhr.addEventListener("load", e => {
        dataContainer.innerHTML = e.target.responseText;
    })

    //Ejecutamos la peticion
    xhr.send();
})