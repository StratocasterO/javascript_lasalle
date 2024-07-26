// mostra les taules de multiplicar del 1 al 9 per la consola

console.log("%cEjercicio 1: tablas de multiplicar", "font-weight: bold");

for (let i = 1; i < 10; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`   ${i} x ${j} = ${i * j}`);
    }
    console.log(``);
}

// recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" ha de tornar "234.1234"

// TODO: comprovar què passa amb els espais

console.log("%cEjercicio 2: betterParse()", "font-weight: bold");

function betterParse(string) {
    let int = ``;   // acumulador
    const ABC = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
    const SEP = `,.'`;
    
    // recorre els caracters de la string
    for (const char of string) {
        // acumula els numeros
        if (!ABC.includes(char.toUpperCase()) && !SEP.includes(char)) int += char

        // detecta si hi ha un separador , . '
        if (int.length > 0 && SEP.includes(char)) {                     
            if (int.includes('.')) break; // comprova si ja hi ha un punt
            int += '.'
        }                       
        
        // para d'acumular si després dels números troba una lletra
        if (int.length > 0 && (ABC.includes(char.toUpperCase()))) break;            
    }

    return int * 1;
}

console.log(betterParse("hola123"));
console.log(betterParse("hola123omar456"));
console.log(betterParse("hola123.45omar456"));
console.log(betterParse("hola123'45omar456"));
console.log(betterParse("hola123,45omar456"));
console.log(betterParse("234.1234'25.5"));
console.log(betterParse("234'1234,25.5"));
console.log(betterParse("'.,123"));

console.log(betterParse("hola89'234"));
console.log(betterParse("43'35adeu"));
console.log(betterParse("amor45.9odi"));
console.log(betterParse("234.1234.25.5"));

console.log("");

// TODO (Extra): repetir la funció betterParse() però que si troba més d'un número retorni un array amb tots ells

console.log("%cEjercicio 2.1: betterBetterParse()", "font-weight: bold");
console.log("TODO");
console.log("");

// crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

console.log("%cEjercicio 3: randomLetter()", "font-weight: bold");

function randomLetter(string) {
    const ABC = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
    let stringNoSpaces = ''
    
    for (const char of string) {
        if (ABC.includes(char.toUpperCase())) stringNoSpaces += char
    }

    if (!stringNoSpaces) return "No hay letras en esa string!"
    
    return stringNoSpaces[parseInt(stringNoSpaces.length * Math.random())]
}

console.log(randomLetter("hola, Omar. Cómo estas?"));
console.log(randomLetter("1234a"));

console.log("");

// TODO: crea una funció que rebi lletres accentuades i torni la mateixa sense accentuar P.e: ò -> o, ë -> e, î -> i...

// crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

console.log("%cEjercicio 4: separateWords()", "font-weight: bold");

function separateWords(string) {
    const ABC = `ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ`;
    let words = '';
    
    for (const char of string) {
        if (ABC.includes(char.toUpperCase())) {
            words += char
        }

        // afegeix un espai si troba un espai o un apostrof i no s'ha afegit un espai al pas anterior
        if ((char == ' ' || char == "'") && words[words.length - 1] != ' ') {
            words += " "
        }
    }
    
    // elimina espai al principi
    if (words[0] == ' ') words = words.slice(1)
        
        // elimina espai al final
    if (words[words.length - 1] == ' ') words = words.slice(0, -1)
        
    return words
}

console.log(separateWords("hola, Omar. Cómo estas?"));
console.log(separateWords("l'Omar és el nostre profe"));
console.log(separateWords(`El Carlos dijo: "¡Omar! ¡Cuidado!"`));
console.log(separateWords(`   El Carlos    dijo: "¡Omar!    ¡Cuidado!"    `));

console.log('');

// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

console.log("%cEjercicio 5: randomWord()", "font-weight: bold");

function randomWord(string) {
    string = separateWords(string)
    let spaces = 0
    
    for (const char of string) {
        if (char == " ") spaces++
    }

    let wordNum = parseInt((spaces + 1) * Math.random())
    
    if (wordNum == 0) return string.slice(0, string.indexOf(" "))

    for (let i = 0; i < wordNum; i++) {
        string = string.slice(string.indexOf(" ") + 1)
    }

    if (string.indexOf(" ") == -1) return string

    return string.slice(0, string.indexOf(" "))
}

console.log(randomWord("hola, Omar. Cómo estas?"));
console.log(randomWord("l'Omar és el nostre profe"));
console.log(randomWord(`El Carlos dijo: "¡Omar! ¡Cuidado!"`));
console.log(randomWord(`   El Carlos    dijo: "¡Omar!    ¡Cuidado!"    `));

console.log(' ');

// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari

// TODO: dues funcions que gestionin les dades rebudes en un array d'strings o en una string amb totes juntes i que retornin un objecte amb les dades introduïdes en propietats
// data0 = "NOM Omar"
// data1 = "COG Olmedo"   -> [data0, data1, data2, ...]
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"

// La funció ha de retornar un objecte així:

// {
//     nom: "Omar",
//     cognom: "Olmedo",
//     edat: 33
// }

// TODO: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array d'objectes amb els noms de les columnes com a propietats
// PISTA: necessitareu ajuda. Demaneu-la
// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csvCotxes = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

const csvStudents = `ID,First Name,Last Name,Age,Grade,Email,Phone,Address
1,John,Doe,18,12,john.doe@example.com,555-1234,123 Main St
2,Jane,Smith,17,11,jane.smith@example.com,555-5678,456 Oak Ave
3,Bob,Johnson,16,10,bob.johnson@example.com,555-9012,789 Elm Rd
4,Sarah,Williams,19,12,sarah.williams@example.com,555-3456,321 Pine Ln
5,Michael,Brown,18,11,michael.brown@example.com,555-7890,654 Maple Dr
6,Emily,Davis,17,10,emily.davis@example.com,555-2468,987 Cedar Rd
7,David,Miller,16,9,david.miller@example.com,555-8642,159 Spruce St
8,Jessica,Wilson,18,12,jessica.wilson@example.com,555-4321,753 Oak Blvd
9,Daniel,Moore,17,11,daniel.moore@example.com,555-6789,246 Elm Ave
10,Ashley,Taylor,16,10,ashley.taylor@example.com,555-0123,468 Maple Ln`;

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];