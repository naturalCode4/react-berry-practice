import axios from "axios"

export const getBerriesFromPokemonAPI = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/berry?limit=64')
        const berries = response.data.results
        return berries
    }
    catch (error) {
        console.log('Error in getBerriesFromPokemonAPI', error)
    }
}


