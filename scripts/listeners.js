// esta función está en el atributo onclick de los títulos de sección
function clicEnSeccion() {
    console.log("Has hecho clic en un título de sección");
}

// afegim un detector d'esdeveniments
function clicEnSubtitulo() {
    console.log("Has hecho clic en el subtítilo");
}

let subtitulo = document.querySelector("h3")
subtitulo.addEventListener("click", clicEnSubtitulo)

// esta función va a estar en todos los párrafos
function clicEnParrafo() {
    console.log("Has hecho clic en el párrafo");
}

let parrafos = document.querySelectorAll("p")

// for (let i = 0; i < parrafos.length; i++) {
//     parrafos[i].addEventListener("click", () => console.log(`Has hecho clic en el párrafo número ${i + 1}`))
// }

parrafos.forEach((parrafo, i) => {
    parrafo.addEventListener("click", () => console.log(`Has hecho clic en el párrafo número ${i + 1}`))
})

console.log(parrafos.length);