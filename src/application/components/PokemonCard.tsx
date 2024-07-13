import React, {useState, useEffect} from "react"
import {axiosInstance} from "../../infra/axiosInstance"
import {idFormatter} from "../utils/IdUtils"
import {colorTypes} from "../utils/ColorTypes"

interface PokemonCardProps {
  pokemonName: string
}

export const PokemonCard: React.FC<PokemonCardProps> = ({pokemonName}) => {
  const [pokemonData, setPokemonData] = useState<any>(null)

  useEffect(() => {
    axiosInstance.get("/pokemon/" + pokemonName).then((response: any) => {
      console.log("response", response.data.types)
      setPokemonData(response.data)
    })
  }, [pokemonName])

  return (
    <>
      <li className="mx-5 justify-center">
        <a className="bg-slate-300 rounded-xl block">
          <img
            src={pokemonData?.sprites.other["official-artwork"].front_default}
          />
        </a>
        <section className="pl-5">
          <p className="font-medium text-gray-500">
            {idFormatter(pokemonData?.id.toString())}
          </p>
          <h5 className="capitalize font-semibold text-xl">
            {pokemonData?.name}
          </h5>
          {pokemonData?.types.map((e: any, index: any) => (
            <span key={index} className={`bg-${e.type.name} block`}>
              {colorTypes[e.type.name as keyof typeof colorTypes]}
            </span>
          ))}
        </section>
      </li>
    </>
  )
}
