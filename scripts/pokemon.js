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
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
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
