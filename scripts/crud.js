// FETCH, POST, PATCH, DELETE

const server = "https://pruebasalle-a1814-default-rtdb.europe-west1.firebasedatabase.app/"
const project = "prueba/"
const database = "frases/"

const url = server + project + database

// Mostro les frases de la base de dades quan carrego la pàgina
showFrases();

let newFrase = document.querySelector("#text")
let sendFrase = document.querySelector("#button")

// Detecció del botó d'enviar frase
sendFrase.addEventListener("click", () => {
    if (newFrase.value) postFrase(newFrase.value)
    else alert("¡No has escrito nada!")

    newFrase.value = ""
    showFrases();
})

// Afegeix detectors als botons de modificar frases
function addUpdateListeners() {
    let updates = document.querySelectorAll(".mod")

    updates.forEach(el => {
        el.addEventListener("click", () => {
            // agafa el text de l'element amb classe "text" que està dins del progenitor del progenitor de l'enllaç
            let frase = prompt("Introduce la nueva frase", el.parentNode.parentNode.querySelector(".text").textContent)
            if (frase) updateFrase(frase, el.parentNode.parentNode.id)
        })
    })
}

// Afegeix detectors als botons d'eliminar frases
function addDeleteListeners() {
    let deletes = document.querySelectorAll(".del")

    deletes.forEach(el => {
        el.addEventListener("click", () => {
            deleteFrase(el.parentNode.parentNode.id);
        })
    })
}

// Demana a la base de dades totes les frases i les mostra
function showFrases() {
    let cont = document.querySelector(".frases")
    cont.innerHTML = ""

    fetch(url + ".json")
        .then(res => res.json())
        .then(res => {
            for (const id in res) {
                const frase = res[id];
                showFrase(frase.date, frase.frase, id)
            }

            // torna a afegir els listeners després de re-renderitzar les frases
            addDeleteListeners();
            addUpdateListeners();
        })
        .catch(error => console.log(error))
}

// Mostra una frase concreta
function showFrase(date, frase, id) {
    let cont = document.querySelector(".frases")

    cont.innerHTML += `<div class="frase" id="${id}">
                            <p class="date">${date}</p>
                            <p class="text">${frase}</p>
                            <div class="links">
                                <a href="#" class="mod">Modificar</a>
                                <a href="#" class="del">Eliminar</a>
                            </div>
                        </div>`
}

// Elimina una frase de la base de dades i torna a mostrar-les totes
function deleteFrase(id) {
    fetch(url + id + ".json", {
        method: 'DELETE'
    })
        .then(showFrases)   // re-renderitza les frases després de eliminar una
        .catch(error => console.log(error))
}

// Actualitza una frase de la base de dades i torna a mostrar-les totes
function updateFrase(frase, id) {
    let date = new Date()
    fetch(url + id + ".json", {
        method: 'PATCH',
        body: JSON.stringify({
            date: "UPDATED " + date.toDateString() + " " + date.toTimeString().slice(0, 8),
            frase: frase
        })
    })
        .then(showFrases)   // re-renderitza les frases després de modificar una
        .catch(error => console.log(error))
}

// Envia una nova frase a la base de dades
function postFrase(frase) {
    let date = new Date()
    fetch(url + ".json", {
        method: 'POST',
        body: JSON.stringify({
            date: date.toDateString() + " " + date.toTimeString().slice(0, 8),
            frase: frase
        })
    })
    .catch(error => console.log(error))
}