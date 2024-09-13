let text = document.querySelector("#nom") // input
let span = document.querySelector("#saludo")
let button = document.querySelector("button")
let color = document.querySelector("#color")
let color2 = document.querySelector("select")

button.addEventListener("click", () => {
    let pronom = document.querySelector('input[type="radio"]:checked')
    if (pronom && text.value) {
        span.innerHTML = `Hola, ${pronom.dataset.pro} ${text.value}!`
        span.style = `color: ${color2.value}`
        console.log(`%cHola, ${pronom.dataset.pro} ${text.value}!`, `color: ${color.value}`);
    }
})