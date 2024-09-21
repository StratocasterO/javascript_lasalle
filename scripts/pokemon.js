let cont = document.querySelector('.cont');

// demana un equip pokemon complet
getPokemon(6);

// fetch a la api de pokemon un pokemon de la primera generació
function getPokemon(num) {
    for (let i = 0; i < num; i++) {
        let pokedexNum = Math.floor(151 * Math.random() + 1);

        fetch("https://pokeapi.co/api/v2/pokemon/" + pokedexNum)
            .then(res => res.json())
            .then(res => {
                let pokemon = {
                    pName: res.name,
                    types: [
                        res.types[0].type.name, 
                        res.types[1] ? res.types[1].type.name : ""
                    ],
                    cry: res.cries.legacy,
                    img: res.sprites.front_default,
                    text: "Placeholder"
                }

                fetch(res.species.url)
                    .then(res => res.json())
                    .then(res => {
                        let entries = res.flavor_text_entries;
                        for (let i = 0; i < entries.length; i++) {
                            if (entries[i].language.name == "es") {
                                pokemon.text = entries[i].flavor_text;
                                break;
                            }
                        }

                        showPokemon(pokemon)
                    })

            })
    }
}

// renderiza un pokemon
function showPokemon({ pName, types, cry, img, text }) {
    let colors = {
        normal: '#D6D5B9',
        fire: '#F7BE8E',
        water: '#B1CAF7',
        electric: '#FBE898',
        grass: '#B9E3A0',
        ice: '#CEEEED',
        fighting: '#E08E8A',
        poison: '#CE93CE',
        ground: '#F1D9AE',
        flying: '#D4C8F9',
        psychic: '#FCA7C3',
        bug: '#D1DE86',
        rock: '#DAD093',
        ghost: '#B5A3C9',
        dragon: '#B698FE',
        dark: '#B4A49A',
        steel: '#DEDEE9',
        fairy: '#ECBAD4',
    };
    // TODO: obtenir colors de https://pokemon.fandom.com/es/wiki/Tipos_elementales

    // capitalize first letter of the name
    pName = pName.charAt(0).toUpperCase() + pName.slice(1);

    // sets brackground gradient if has more than one type
    background = types[1] == "" ? colors[types[0]] : `linear-gradient(121deg, ${colors[types[0]]} 0%, ${colors[types[0]]} 50%, ${colors[types[1]]} 50%, ${colors[types[1]]} 100%);`

    cont.innerHTML += `
    <div class="card" style="background: ${background}">
        <img src="${img}" alt="" height="200px" width="200px">
        <h3>${pName}</h3>
        <p>${text}</p>
        <a href="#" onclick="
        (function(){
            var audio = document.querySelector('audio#${pName}');
            audio.play();
        })();
        " >Oír grito</a>
        <audio id="${pName}" src="${cry}"></audio>
    </div>`
}
