
const base_url = "https://pokeapi.co/api/v2/"

const pokemon_name = document.querySelector("#pokemon_name")
const pokemon_photo = document.querySelector("#pokemon_image")

const pokemon_id = document.querySelector("#pokemon_id")

// List
const list_moves = document.querySelector("#list_moves")

const getPokemon = async id => {
    try {
        const response = await fetch(`${base_url}pokemon/${id}`)
        const data = await response.json()
        pokemon_name.textContent = data.name.toUpperCase()
        pokemon_photo.src = data.sprites.front_default
        const moves = data.moves

        // Map para obtener la listas de movimientos
        moves.map(data_move => {
            let element = document.createElement("li")
            element.appendChild(document.createTextNode(data_move.move.name))
            list_moves.append(element)
        })
    } catch (e) {
        console.log(e.toString())
    }
}   

const searchPokemon = _ => {
    list_moves.innerHTML = ""
    getPokemon(pokemon_id.value)
    pokemon_id.value = ""
}

getPokemon(25)