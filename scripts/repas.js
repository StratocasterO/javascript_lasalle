// TODO: mostra les taules de multiplicar del 1 al 9 per la consola

// TODO: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" ha de tornar "234.1234"

// TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari

// TODO: dues funcions que gestionin les dades rebudes en un array d'strings o en una string amb totes juntes
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