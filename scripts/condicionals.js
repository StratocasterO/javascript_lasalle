console.log("%cCondicionals", "font-weight: bold");
console.log("⚠ Descomenta els prompts per que funcionin els exercicis ⚠");


text = "Això és un text predeterminat"
// text = prompt("Introdueix el text")

if (text.length > 20) {
    console.log("Se ha cumplido mi condición!");
}

nom = ""
// nom = prompt("Introdueix el teu nom")

if (nom == "Omar") console.log("Hola, Omar!");
else console.log("No eres Omar... Hola, desconocido!");

/* 
if (nom == "Omar") {
    console.log("Hola, Omar!");
} else {
    console.log("No eres Omar... Hola, desconocido!");
} */

animal = "perro"
color = "verde"

if (animal == "perro") {
    console.log("Sácalo a pasear");
} else if (animal == "gato") {
    console.log("Limpia el arenero");
} else if (animal == "perro" && color == "verde") { // aquí no llega porque la primera condicion ya es true
    console.log("Qué raro eres!");
} else if (animal == "caballo") {
    console.log("Sal a cabalgar");
} else if (animal == "pez") {
    console.log("Ponle de comer");
} else {
    console.log("Pobrecito, no tienes ni gato ni perro ni caballo ni pez");
}

if (animal == "perro" || animal == "gato") console.log("Eres una básica");
// ! if (animal == "perro" || "gato") console.log("Eres una básica"); ERROR DE CONDICIÓN

animals = ["perro", "jerbo", "caballo", "pez"]

if (animals.includes("perro") && color == "verde") console.log("Qué raro eres!");
if (animals.includes("gato")) console.log("Limpia el arenero");
if (animals.includes("perro")) console.log("Sácalo a pasear");
if (animals.includes("caballo")) console.log("Sal a cabalgar");

if (animal == "pez") console.log("Ponle de comer");
else console.log("Pobrecito, no tienes pez");

personas = 4

switch (personas) {
    case 1:
        console.log("No aceptamos reservas para uno");
        break;
    case 2:
        console.log("Buenas noches, parejita");
        break;
    case 3:
        console.log("Hehehe sois multitud");
        break;
    case 4:
        console.log("¿Cita doble?");
        break;
    case 5:
        console.log("¡¡Cuánta gente!!");
        break;
    default:
        console.log("Eso no es un número aceptable");
        break;
}

// * Operadores booleanos: ==, ===, <, >, <=, >=, !=, ||, &&, !

console.log(1 == "1");
console.log(1 === "1");

user = ""
// user = prompt("Introdueix el teu nom d'usuari")

if (!user) {
    console.log("No estas logueado!");
} else {
    console.log("Bienvenido, " + user);
}

// crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)

function animalico() {  // Solución de Gonzalo
    let animal = prompt("introduce un nombre de animal").trim().toLowerCase();

    if (animal == "perro") {
        console.log("🐩: tienes que sacarlo a pasear 3 veces al dia minimo media hora");
    } else if (animal == "gato") {
        console.log("🐈: ni se te ocurra bañarlo, que se rallan");
    } else if (animal == "panda") {
        console.log("🐼: Dale bambu del bueno ahi");
    } else if (animal == "orangután" || animal == "orangutan") {
        console.log("🦧: Claramente no deberias tener un Orangutan");
    } else if (animal == "dragón" || animal == "dragon") {
        console.log("🐲: Quizas deberias dejar las drogas");
    } else {
        console.log("no sé cómo se cuida ese tipo de animal, introduce otro"); // tambien podria usarse un alert()
        animalico();
    }
}

// crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

nombreCompuesto = () => {  // Solución de Xavi
    let nombreCompleto = prompt('Dime tu nombre competo y tu primer apellido');

    let largoNombreCompleto = nombreCompleto.split(" ").length;

    if (largoNombreCompleto > 2) console.log('Tienes más de 1 nombre');
    else console.log('Tienes 1 solo nombre');
}

// crea una función que pida dos números y un símbolo y haga la operación correspondiente (+, -, *, /, %)

function calcular() {   // Solución de Myrella
    let operacion = prompt("Introduzca la operación que desea realizar (+, -, *, /, %)")
    if (!"+-*/%".includes(operacion)) {
        alert("Eso no es un símbolo aceptable");
        return;
    }

    let x = parseFloat(prompt("introduzca el primer numero"))
    if (isNaN(x)) {
        alert("El número introducido no es válido")
        return;
    }

    let y = parseFloat(prompt("introduzca el segundo numero"))
    if (isNaN(y)) {
        alert("El número introducido no es válido")
        return;
    }

    switch (operacion) {
        case "+":
            alert("El resultado es: " + (x + y));
            break;
        case "-":
            alert("El resultado es: " + (x - y));
            break;
        case "*":
            alert("El resultado es: " + (x * y));
            break;
        case "/":
            if (y !== 0) {
                alert("El resultado es: " + (x / y));
            } else {
                alert("No se puede dividir por cero");
            }
            break;
        case "%":
            if (y !== 0) {
                alert("El resultado es: " + (x % y));
            } else {
                alert("No se puede dividir por cero");
            }
            break;
    }
}

// TODO: crea una función que divida dos números enteros y te devuelva en un array el resultado y el resto (residuo)

// TODO: crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"

function pedido() {
    quiereCamiseta = prompt("¿Quieres camiseta?");

    if (quiereCamiseta == "Si") {
        tallaCamiseta = prompt("¿De que talla la quieres? (S, M, L, XL)");
    }

    quierePantalon = prompt("¿Quieres pantalon?");

    if (quierePantalon == "Si") {
        tallaPantalon = prompt("¿De que talla la quieres? (S, M, L, XL)");
    }

    quiereGorra = prompt("¿Quieres gorra?");

    if (quiereGorra == "Si") {
        tallaGorra = prompt("¿De que talla la quieres? (S, M, L, XL)");
    }

    respuesta = "";

    if (tallaCamiseta != null) {
        respuesta += `Has pedido una camiseta con la talla ${tallaCamiseta}`;
    }
    if (tallaGorra != null) {
        respuesta += `Has pedido una gorra con la talla ${tallaGorra}`;
    }
    if (tallaPantalon != null) {
        respuesta += `Has pedido un pantalon con la talla ${tallaPantalon}`;
    }

    console.log(respuesta);
}

pedido()

// TODO: crea una función que esté al principio de todo del script y te permita decidir cuál de los cuatro ejercicios anteriores se ejecuta