const nombre = document.getElementById('nombre')
const perfil = document.getElementById('perfil')
const imagen = document.getElementById('pokemon-img')
const exp = document.getElementById('exp')
const hp = document.getElementById('hp')
const button = document.getElementById('btn-poke')

function getPokemon() {
    let id = Math.floor((Math.random() * 152) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
        nombre.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`; 
        perfil.innerText = "Type: " + data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)
        hp.innerText = data.stats[0].base_stat
        exp.innerText = "Experience: " + data.base_experience + " exp"

    })
    .catch(error => console.error('Error obteniendo datos del Pokémon:', error));  
}

getPokemon();

button.addEventListener('click', getPokemon);



