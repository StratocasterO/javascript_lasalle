let button = document.querySelector("button")
let text = document.querySelector("#nom")
let span = document.querySelector("span")

button.addEventListener("click", () => {
    span.innerHTML = `Hola, ${text.value}!`
})