console.log("%cBucles", "font-weight: bold");

for (let i = 0; i < 10; i++) {  // inicialización del contador, comprobación para seguir, incremento
    console.log("Hola " + i);
}

console.log("----------------------");

for (let i = 9; i >= 0; i--) {
    console.log("Hola " + i);
}

console.log("----------------------");

alumnos = ["Gonzalo", "Carlos", "Ella", "Arnau", "Mary", "Marc", "Xavi"]

for (let i = 0; i < alumnos.length; i++) {  // ejecuta el bucle tantas veces como elementos tiene el array
    console.log("Hola, " + alumnos[i]);
}

console.log("----------------------");

for (const alumno of alumnos) {     // recorrer un array sin indice
    console.log("Hola, " + alumno);
    // ! alumnos[alumnos.indexOf(alumno)] = "Omar"         MALA IDEA
}

for (let i = 0; i < alumnos.length; i++) {  // recorrer un array con indice
    // const alumno = alumnos[i];
    // console.log("Hola, " + alumno);
    alumnos[i] = alumnos[i].toUpperCase()  // modifica los elementos del array
}

console.log("----------------------");

professor = {
    nom: "Omar",
    cognoms: "Olmedo Ferrer",
    edat: 33,
    localitat: "Piera"
}

for (const propietat in professor) {
    if (Object.hasOwnProperty.call(professor, propietat)) {
        const element = professor[propietat];
        console.log(`La propietat ${propietat} del professor té un valor de ${element}`);
    }
}

console.log("----------------------");

let i = 0;
while (i < 10) {
    console.log("Hola " + i);
    i++;
}

console.log("----------------------");

alumnos.forEach(alumno => {
    console.log("Hola, " + alumno);
});


// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente

// TODO: escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5

// TODO: fes un contador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100

// TODO: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi amb el format:       
//                       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua