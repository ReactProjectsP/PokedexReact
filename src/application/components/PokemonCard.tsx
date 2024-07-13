import React, {useState, useEffect} from "react"
import {axiosInstance} from "../../infra/axiosInstance"

interface PokemonCardProps {
  pokemonName: string
}

export const PokemonCard: React.FC<PokemonCardProps> = ({pokemonName}) => {
  const [pokemonData, setPokemonData] = useState<any>(null)

  useEffect(() => {
    axiosInstance.get("/pokemon-form/" + pokemonName).then((response: any) => {
      console.log("response", response.data)
      setPokemonData(response.data)
    })
  }, [pokemonName])

  return (
    <>
      <section className="bg-slate-300 w-[15rem] h-[10rem] grid justify-center rounded-xl">
        <h1>{pokemonData?.pokemon.name}</h1>
        <img src={pokemonData?.sprites.back_default} />
      </section>
    </>
  )
}
