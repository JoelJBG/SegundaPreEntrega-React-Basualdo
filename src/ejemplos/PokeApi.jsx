import { useEffect } from "react"
import { useState } from "react"
import { useFetch } from "../Hook/useFetch"


const PokeApi = () => {

    const [id, setId] = useState(1)
    const { data: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                loading ? <h2>Cargando</h2>
                :
                    <div>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-outline-primary">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-3">Siguiente</button>

        </div>
    )
}

export default PokeApi
