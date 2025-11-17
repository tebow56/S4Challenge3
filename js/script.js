
const getPokemon = document.getElementById('get-pokemon')
const pokemonContainer = document.getElementById('pokemonContainer')
console.log(pokemonContainer)
getPokemon.addEventListener('click', () => {
    const pokemon = document.getElementById('pokemon-select').value
    console.log(pokemon)
    fetch ('https://pokeapi.co/api/v2/pokemon/'+pokemon)
    .then ((response) => {
        if (!response.ok) {
            throw new Error("No se ha encontrado la información requerida")
        }
        else {
        return response.json()}
    }).then ((data) =>{
        console.log(data);
        pokemonContainer.innerHTML= `
            <h4><strong>${data.name}</strong></h4>
            <img src= ${data.sprites.front_default}>
            <p><strong>Type:</strong>${data.types.map((element) => element.type.name).join(" ")}<p>
            <p><strong>Height:</strong>${data.height}<p>
            <p><strong>Weight: </strong>${data.weight}<p>`
        
    });
})

