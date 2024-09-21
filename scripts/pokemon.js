// fetch a la api de pokemon un pokemon de la primera generació
let num = Math.floor(151 * Math.random() + 1);

fetch("https://pokeapi.co/api/v2/pokemon/" + num)
    .then(res => res.json())
    .then(res => {
        console.log(res.cries.legacy);

        console.log(res.name, res.types[0].type.name)
        showPokemon(res.name, res.types[0].type.name, res.cries.legacy)
    })

// renderitzat condicional en funció del tipus de pokemon
let cont = document.querySelector('.cont');
let audio = document.querySelector('audio');

function showPokemon(name, type, cry) {
    let colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    }

    // capitalize first letter of the name
    name = name.charAt(0).toUpperCase() + name.slice(1);

    cont.innerHTML += `<a href="#" onclick="audio.play();" class="pokemon" style="background-color: ${colors[type]}">${name}</a>`

    audio.src = cry;
}