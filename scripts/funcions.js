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