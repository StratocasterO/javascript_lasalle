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

parrafos.forEach((parrafo, i) => {
    parrafo.addEventListener("click", () => console.log(`Has hecho clic en el párrafo número ${i + 1}`))
})

// afegir elements a una secció. 
// ! ⚠ IMPORTANT: s'han d'afegir ABANS de gestionar els resaltados perquè estiguin inclosos
section2 = document.querySelector("#section2")
section2.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, itaque! Explicabo quibusdam harum mollitia dolorem asperiores quis. Cupiditate est, perferendis quasi cumque iste molestiae reprehenderit!</p>'
section2.innerHTML += '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span class="resaltado">Doloribus amet sunt voluptates consequuntur ad perspiciatis labore error impedit aliquid architecto veniam earum exercitationem aliquam tenetur</span>, <span class="custom">blanditiis voluptatibus explicabo quod numquam enim fugiat!</span> Tenetur doloremque assumenda cupiditate blanditiis saepe necessitatibus omnis!</p>'

// Resaltar elementos con una clase
let isResaltado = false;

let resaltados = document.querySelectorAll(".resaltado")
resaltados.forEach(resaltado => {
    resaltado.classList.remove("resaltado") // quito el resaltado
})

let botonResaltar = document.querySelector("#resalta")
botonResaltar.addEventListener("click", (event) => {
    isResaltado = !isResaltado
    event.target.textContent = isResaltado ? "Deja de señalar lo más importante" : "Señala lo más importante"

    resaltados.forEach(resaltado => {
        resaltado.classList.toggle("resaltado")
    })
})

// ! ⚠ NOTA: els listeners dels paràgrafs de la secció 2 s'han perdut al reescriure el seu innerHTML a la línia 26