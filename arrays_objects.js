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

console.log("----------------- Ejercicio objetos y arrays -----------------");

// cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
// cread un array que contenga una lista de una de las propiedades de los objetos
// cread una variable que contenga la suma de una propiedad (que sea numérica)
// mostrar por consola todo lo anterior
// mostrar por consola una frase que resuma las propiedades de cada objeto
// buscad una manera de mostrar por consola todos los objetos en forma de tabla

pokemon = [
    {
        nombre: "Bulbasaur",
        nivel: 8,
        tipo: "🌿",
        ataques: ["Látigo cepa", "Placaje"]
    },
    {
        nombre: "Squirtle",
        nivel: 6,
        tipo: "💧",
        ataques: ["Burbuja", "Placaje"]
    },
    {
        nombre: "Charmander",
        nivel: 10,
        tipo: "🔥",
        ataques: ["Ascuas", "Gruñido"]
    },
    {
        nombre: "Pikachu",
        nivel: 25,
        tipo: "⚡",
        ataques: ["Impactrueno", "Placaje", "Puñetazo", "Rayo"]
    },
    {
        nombre: "Eevee",
        nivel: 16,
        tipo: "⭕",
        ataques: ["Mordisco", "Placaje"]
    }
]

console.log(pokemon);
console.log(pokemon.toString());

tipos = [pokemon[0].tipo, pokemon[1].tipo, pokemon[2].tipo, pokemon[3].tipo, pokemon[4].tipo]
console.log(tipos);
console.log(tipos.toString()); // convierte el array en una string con todos sus elementos

nivelTotal = pokemon[0].nivel + pokemon[1].nivel + pokemon[2].nivel + pokemon[3].nivel + pokemon[4].nivel
console.log("Nivel total: " + nivelTotal);

console.log(`El pokemon ${pokemon[0].nombre} (tipo ${pokemon[0].tipo}) está al nivel ${pokemon[0].nivel} y tiene ${pokemon[0].ataques.length} ataques`);
console.log(`El pokemon ${pokemon[1].nombre} (tipo ${pokemon[1].tipo}) está al nivel ${pokemon[1].nivel} y tiene ${pokemon[1].ataques.length} ataques`);
console.log(`El pokemon ${pokemon[2].nombre} (tipo ${pokemon[2].tipo}) está al nivel ${pokemon[2].nivel} y tiene ${pokemon[2].ataques.length} ataques`);
console.log(`El pokemon ${pokemon[3].nombre} (tipo ${pokemon[3].tipo}) está al nivel ${pokemon[3].nivel} y tiene ${pokemon[3].ataques.length} ataques`);
console.log(`El pokemon ${pokemon[4].nombre} (tipo ${pokemon[4].tipo}) está al nivel ${pokemon[4].nivel} y tiene ${pokemon[4].ataques.length} ataques`);

console.table(pokemon)