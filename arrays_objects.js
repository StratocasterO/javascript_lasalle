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