console.log("Aquest és el JS d'arrays i objectes");

data = ["Dog", "😻", 23, true];

console.log(data);

dog = "🐶";
cat = "🐱";
racoon = "🦝";
pig = "🐷";
koala = "🐨";

animals = [dog, cat, racoon, pig, koala, koala, koala];

console.log(animals);

animals[5] = racoon;

console.log(animals);

console.log(data[1]); // podem accedir als elements d'un array usant el seu INDEX

console.log(`L'array data conté ${data.length} elements`); // length és una PROPIETAT dels arrays

// ----------------------------------------------------------------

alumne = {
    nom: "Gonzalo",
    cognom: "Pino",
    edat: 41,
    hobbie: "🎮",
    animals: [koala, animals[1]]
}

console.log(alumne);

alumne.edat = 46;   // escriptura d'una propietat d'un objecte
edatGonzalo = alumne.edat;  // lectura d'una propietat d'un objecte

console.log(`El ${alumne.nom} ${alumne.cognom} té ${alumne.edat} anys i li agrada ${alumne.hobbie}`);

profe = {};

console.log(profe);

profe.nom = "Omar"
profe.edat = 33

console.log(profe);

alumnes = [
    alumne,
    alumne2 = {
        nom: "Pablo",
        cognom: "Perez",
        edat: 19,
        hobbie: "🧶"
    },
    {
        nom: "Maria",
        cognom: "Martínez",
        edat: 49,
        hobbie: "🚲"
    }
]

console.log(alumnes);
console.log(alumne2);
console.log(alumnes[2]);

// ----------------------------------------------------------------

// TODO: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
// TODO: cread un array que contenga una lista de una de las propiedades de los objetos
// TODO: cread una variable que contenga la suma de una propiedad (que sea numérica)
// TODO: mostrar por consola todo lo anterior
// TODO: mostrar por consola una frase que resuma las propiedades de cada objeto
// TODO: buscad una manera de mostrar por consola todos los objetos en forma de tabla