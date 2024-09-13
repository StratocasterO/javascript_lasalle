let text = document.querySelector("#nom") // input
let span = document.querySelector("#saludo")
let text2 = document.querySelector("#nom2") // input
let span2 = document.querySelector("#saludo2")

// al pulsar enter o TAB
text.addEventListener("change", () => {
    span.innerHTML = `Hola, ${text.value}!`
})

// al soltar cualquier tecla
text2.addEventListener("keyup", (event) => {
    span2.innerHTML = `Hola, ${text2.value}!`
})