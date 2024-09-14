let dni = document.querySelector("#dni")
let val = document.querySelector("#val")

dni.addEventListener("keyup", () => {
    if (dni.value.length == 9) {
        if (validateDNI(dni.value)) {
            val.innerHTML = " ✔"
        } else {
            val.innerHTML = " ❌"
        }
    }
    if (dni.value.length < 9) val.innerHTML = ""
    if (dni.value.length > 9) val.innerHTML = " ❌"
})

let card = document.querySelector("#card")
let val2 = document.querySelector("#val2")

card.addEventListener("keyup", () => {
    if (card.value.length == 16) {
        if (validateCard(card.value)) {
            val2.innerHTML = " ✔"
        } else {
            val2.innerHTML = " ❌"
        }
    }
    if (card.value.length < 16) val2.innerHTML = ""
    if (card.value.length > 16) val2.innerHTML = " ❌"
})

function validateDNI(dni) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKET"

    if (dni.length != 9) {
        return false;
    }

    let numero = dni.substring(0, 8);
    let letra = dni.substring(8, 9);
    let resto = numero % 23;
    let letraCorrecta = letras.charAt(resto);
    
    return letra.toUpperCase() == letraCorrecta;
}

function validateCard(card) {
    if (card.length != 16) {
        return false;
    }

    let numbers = card.split("")

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0) numbers[i] = numbers[i] * 2
        if (numbers[i] > 9) numbers[i] = numbers[i] - 9
    }

    let res = numbers.reduce((total, num) => total + parseInt(num))

    return res % 10 == 0
}