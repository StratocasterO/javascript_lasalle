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

// gestionar el contingut del formulari
let formButton = document.querySelector("#submit")
formButton.addEventListener("click", () => {
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value

    if (!name.match(/^[a-z ,.'-]+$/i)) {
        console.log("%cFormato del nombre incorrecto", "color: red");
        return
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        console.log("%cFormato del email incorrecto", "color: red");
        return
    }
    
    if (!message.match(/(.|\s)*\S(.|\s)*/)) {
        console.log("%cEl mensaje no puede estar en blanco", "color: red");
        return
    }

    console.log(`El usuario ${name} (${email}) ha escrito:
        ${message}`)

    console.log({name, email, message});

    // mostra el contingut enviat al HTML
    document.querySelector("form div").innerHTML += `<small>Response sent: ${[name, email, message]}</small>`

    // L'elimina al cap de 3 segons
    setTimeout(() => document.querySelector("form div").innerHTML = "", 3000)

    // Neteja el formulari
    document.querySelector("#name").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#message").value = ""
})

// validació del formulari
let nameForm = document.querySelector("#name")
nameForm.addEventListener("keyup", (event) => {
    if (event.target.value.match(/^[a-z ,.'-]+$/i)) event.target.style.border = "3px solid green"
    else {
        event.target.style.border = "3px solid red"
    }
})

let email = document.querySelector("#email")
email.addEventListener("keyup", (event) => {
    if (event.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) event.target.style.border = "3px solid green"
    else {
        event.target.style.border = "3px solid red"
    }
})

let message = document.querySelector("#message")
message.addEventListener("keyup", (event) => {
    if (event.target.value.match(/(.|\s)*\S(.|\s)*/)) event.target.style.border = "3px solid green"
    else {
        event.target.style.border = "3px solid red"
    }
})