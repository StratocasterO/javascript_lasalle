// exercicis fetch api

async function getRandomPokemon() {
    let count = 0
    let res, data

    // actualizo el numero de pokemon disponibles
    try {
        res = await fetch("https://pokeapi.co/api/v2/pokemon")
        data = await res.json()
        count = data.count
    } catch (error) {
        console.log("Error calculando el número de pokemon");
        console.log(error.message);
    }

    // pido un pokemon aleatorio
    let number = Math.floor(count * Math.random() + 1)
    console.log("Buscando el pokemon número " + number);

    try {
        res = await fetch("https://pokeapi.co/api/v2/pokemon/" + number)
        data = await res.json()

        pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            weight: data.weight,
            height: data.height,
            types: data.types
        }
    
        console.log(pokemon); // TODO gestionar pokemon recibido
    } catch (error) {
        console.log("No existe el pokemon con ID " + number);
        getRandomPokemon()
    }
}

getRandomPokemon()