console.log("%cF%cu%cn%cc%ci%co%cn%cs", "font-weight: bold; color: maroon", "font-weight: bold; color: red","font-weight: bold; color: orange","font-weight: bold; color: yellow","font-weight: bold; color: green","font-weight: bold; color: blue","font-weight: bold; color: purple","font-weight: bold; color: pink");

// función que muestra una string por la consola
function saludar() {
    console.log("hola, clase!");
}

saludar()

// función que devuelve una string
function saludo() {
    return "hola, clase!"
}

console.log(saludo());

// función con un parámetro que muestra una string por la consola
function saludarPersona(nom) {
    console.log(`hola, ${nom}!`);
}

saludarPersona("David")
saludarPersona("Gonzalo")
saludarPersona("Carlos")

// función con un parámetro que devuelve una string personalizada
function saludoPersona(nom) {
    return `hola, ${nom}!`
}

console.log(saludoPersona("Alberto"));
console.log(saludoPersona("Myrella"));
console.log(saludoPersona("Xavi"));

// función a la que le PASEMOS un DNI y nos lo DEVUELVA ofuscado
function dniOfuscado(dni) {
    return dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
}

console.log(dniOfuscado("12345678A"));

/* versión arrow
const dniOfuscado = dni => dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
*/

// función que ofusca el dni guardado en una variable
dni = "98765432B"

function ofuscarDni() {
    dni = dniOfuscado(dni)
}

ofuscarDni();

console.log(dni);

/* otras versiones
function ofuscarDni() {
    let ofus // variable auxiliar
    ofus = dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
    dni = ofus
}

function ofuscarDni() {
    // reasignando directamente
    dni = dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
}
*/

// una función a la que LE PASES un array de dos elementos y te DEVUELVA el array invertido
gatigos = ["🐱","🐶"]

function arrayInvertit(array) {
    return array.toReversed()
}

console.log(arrayInvertit(gatigos))
console.log(arrayInvertit(["A", "B"]));

/*  otras versiones
function arrayInvertit(array) {
    let arrayInv = array.toReversed()
    return arrayInv
}
    
function arrayInvertit(array) {
    array.reverse();
    return array;
} 

function arrayInvertit(array) {
    let [a, b] = array
    return [b, a]
}

function arrayInvertit(array) {
    let a = array[0]
    let b = array[1]
    return [b, a]
}
*/

console.log(arrayInvertit);

arrInv = arrayInvertit // asigna la definición de la funciín a otra "variable"

console.log(arrInv);

console.log(arrInv(["A", "B"]))

// Funciones flecha ----------------------------------------------------

const logRojo = (content) => {
    console.log("%c" + content, "color: red");
}

const logAzul = (content1, content2 = "") => {
    console.log("%c" + content1 + content2, "color: blue");
}

logRojo("Hola, Omar!");
logAzul("Hola, ", "Omar!")

const decirHola = () => {   // sin parámetros
    console.log("Hola!");
}

decirHola()

const decirAdios = _ => {   // sin parámetros
    console.log("Adios!");
}

decirAdios()

const suma = (a, b) => {
    return a + b
}

console.log(suma(2, 5));

const resta = (a, b) => a - b // return implicito
const major = (a, b) => a > b // return implicito

console.log(resta(5, 2));
console.log(major(5, 2));

const preguntar = () => console.log("¿Qué tal?"); // ! ojo, función que no devuelve nada

preguntar();

console.log(preguntar());
console.log(console.log("Omar")); // console.log() tampoco devuelve nada

// Parámetros default -------------------------------------------------------

function logColor(content, color = "purple") {  // paràmetro con valor default
    console.log("%c" + content, "color: " + color);
}

logColor("Arnau")
logColor("Arnau", "pink")

// TODO: paràmetre amb valor default amb condicional

// Funcions anónimes i autoexecutables ----------------------------------------

const getName = () => "Marc"
console.log("Hola, " + getName());

console.log(  (  () => "Hola, Roselly"  )()  );

// * funció anònima:
/*
(params) => { 
    aquí hi ha codi
    aquí hi ha més codi
    return bla bla bla
}
*/

// *  funció autoexecutable:
(function cosa(param) {
    console.log("Sóc autoexecutable " + param);
})("yupiiii");

// *  funció anònima i autoexecutable:
cosa = (function (param) {
    console.log("Sóc anònima i autoexecutable " + param);
})("yupiiii");

console.log(cosa); // undefined perquè la funció no retorna res

// Funcions callback --------------------------------------------------------
function logCustom(content, log) {
    log(content)
}

logCustom("Omar", console.log)
logCustom("Omar", logRojo)
logCustom("Omar", logAzul)

logCustom("Omar", (txt) => {
    console.log("%c" + txt, "color: green");
})

logCustom("Omar", (txt) => console.log("%c" + txt, "color: orange"))

// Funciones temporales ---------------------------------------------------

setTimeout(logCustom("Me he ejecutado inmmediatamente!", logRojo), 2000)        // això s'executa immediatament
// setTimeout(() => logCustom("ME he ejecutado después de dos segundos!", logRojo), 2000)  // això triga dos segons

// setInterval(() => {
//     console.log("Ha pasado un segundo!")
//     console.log("");
// }, 1000);

setTimeout(() => {
    logCustom("ME he ejecutado después de dos segundos!", logRojo)

    setInterval(() => {
        console.log("Ha pasado un segundo!")
        console.log("");
    }, 1000);
}, 2000)  // això triga dos segons

