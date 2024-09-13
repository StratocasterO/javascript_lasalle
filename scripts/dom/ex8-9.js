let input = document.querySelector("#in")
let output = document.querySelector("#out")
let init = document.querySelector("#inicial")
let final = document.querySelector("#final")
let button = document.querySelector("button")

button.addEventListener("click", () => {
    let initial = parseFloat(input.value)
    let converted

    if(init.value == final.value) converted = initial
    if(init.value == "f") {
        if(final.value == "c") converted = ftoc(initial).toFixed(1)
        if(final.value == "k") converted = ftok(initial).toFixed(1)
    }
    if(init.value == "c") {
        if(final.value == "f") converted = ctof(initial).toFixed(1)
        if(final.value == "k") converted = ctok(initial).toFixed(1)
    }
    if(init.value == "k") {
        if(final.value == "c") converted = ktoc(initial).toFixed(1)
        if(final.value == "f") converted = ktof(initial).toFixed(1)
    }

    output.value = converted
})

ftoc = t => (t - 32) * 5 / 9
ctof = t => (t * 9 / 5) + 32
ctok = t => t + 273.15
ktoc = t => t - 273.15
ftok = t => ctok(ftoc(t))
ktof = t => ctof(ktoc(t))