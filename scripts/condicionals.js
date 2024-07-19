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

// crea una función que divida dos números enteros y te devuelva en un array el cociente y el resto (residuo) [cociente, residuo]

function division(q, p) {
    return [parseInt(q/p), q%p]
}

a = 27
b = 7
console.log(`El cociente de dividir ${a} entre ${b} es ${division(a, b)[0]} y el resto es ${division(27, 7)[1]}`);

a = 2773457
b = 7245
console.log(`El cociente de dividir ${a} entre ${b} es ${division(a, b)[0]} y el resto es ${division(27, 7)[1]}`);

// crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"

function pedido() {
    let prenda = prompt(`Elige la prenda que quieres pedir: 
camiseta 👕, pantalón 👖 o gorra 🧢`).toLowerCase()

    if (!["camiseta", "gorra", "pantalon", "pantalón"].includes(prenda)) {
        console.log("Prenda incorrecta, elige otra!");
        return pedido();
    }

    let color = prompt(`Elige de qué color quieres la prenda:
rojo 🔴, azul 🔵, verde 🟢 o amarillo 🟡`).toLowerCase()

    if (!["roja", "rojo", "azul", "amarilla", "amarillo", "verde"].includes(color)) {
        console.log("Color no disponible, vuelve al inicio!");
        return pedido();
    }

    if (color == "roja") color = "rojo"
    if (color == "amarilla") color = "amarillo"
    
    let talla = prompt(`Elige la talla de tu prenda:
S, M, L, XL`).toUpperCase()

    if (!["S", "M", "L", "XL"].includes(talla)) {
        console.log("Talla no disponible, vuelve al inicio!");
        return pedido();
    }

    let articulo = ["pantalon", "pantalón"].includes(prenda) ? "un" : "una" // operador ternario: equivalente a un if else

    let pedidoCompleto = `Has pedido ${articulo} ${prenda} de color ${color} talla ${talla}`
    console.log(pedidoCompleto);
}

// crea una función que esté al principio de todo del script y te permita decidir cuál de los cuatro ejercicios anteriores se ejecuta

function elegirFuncion() {
    let func = parseInt(prompt(`Elige el número de la función que quieres ejecutar:
    1: calculadora
    2: pedido ropa
    3: cuidado de animales
    4: comprobador de nombres compuestos`))

    if (func == NaN) return; 

    if (![1, 2, 3, 4].includes(func)) {
        console.log("No es una función válida, recarga la página para elegir otra");
        return;
    }

    switch (func) {
        case 1:
            calcular();
            break;
        case 2:
            pedido();
            break;
        case 3:
            animalico();
            break;
        case 4:
            nombreCompuesto();
            break;
    }

    console.log("Recarga la página para elegir otra función");
}

elegirFuncion()