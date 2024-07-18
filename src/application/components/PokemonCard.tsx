import React, {useState, useEffect} from "react"
import {axiosInstance} from "../../infra/axiosInstance"
import {idFormatter} from "../utils/IdUtils"

interface PokemonCardProps {
  pokemonName: string
}

export const PokemonCard: React.FC<PokemonCardProps> = ({pokemonName}) => {
  const [pokemonData, setPokemonData] = useState<any>(null)

  useEffect(() => {
    axiosInstance.get("/pokemon/" + pokemonName).then((response: any) => {
      console.log("response", response.data)
      setPokemonData(response.data)
    })
  }, [pokemonName])

  return (
    <>
      <li className="h-[12rem] w-[14rem] bg-slate-300 rounded-xl block cursor-pointer hover:-translate-y-2.5 mx-5 justify-center relative">
        <a className="flex w-full justify-center absolute float-left top-[-2rem] max-h-[80px]">
          <img src={pokemonData?.sprites.other.showdown.front_default} />
        </a>
        <section className="px-5 pt-[35%] text-center">
          <p className="font-medium text-gray-500">
            {idFormatter(pokemonData?.id.toString())}
          </p>
          <h5 className="capitalize font-semibold text-xl my-1">
            {pokemonData?.name}
          </h5>
          <div className="flex w-full justify-center">
            {pokemonData?.types.map((e: any, index: any) => (
              <span
                key={index}
                className={`bg-${e.type.name} text-center rounded-lg text-white py-1 px-3 mx-1`}>
                {e.type.name}
              </span>
            ))}
          </div>
        </section>
      </li>
    </>
  )
}
