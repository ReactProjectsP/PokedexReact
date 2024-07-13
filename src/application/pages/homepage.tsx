import * as React from "react"
// import {PokemonCard} from "../components/PokemonCard"
import {useEffect, useState} from "react"
import {axiosInstance} from "../../infra/axiosInstance"
import {PokemonCard} from "../components/PokemonCard"
import {Filter} from "../components/Filter"

export function Homepage() {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    axiosInstance.get("/pokemon?limit=12&offset=0").then((response) => {
      setData(response.data.results)
    })
  }, [])

  const nextPokemons = () => {
    axiosInstance.get("/pokemon?limit=12&offset=12").then((response) => {
      setData(response.data.results)
    })
  }

  return (
    <>
      <header className="my-10 flex justify-center">
        <img src="src/assets/Pokédex_logo.png" alt="Pokedex Logo" />
      </header>
      <section className="flex">
        <Filter></Filter>
        <main className="mx-10 w-full">
          <section className="grid grid-cols-3 gap-[20px] place-items-center">
            {data.map((pokemon: any) => {
              return <PokemonCard pokemonName={pokemon.name}></PokemonCard>
            })}
          </section>
          <div className="w-full text-end my-[5rem]">
            <a className="mr-[7rem] cursor-pointer" onClick={nextPokemons}>
              Siguiente
            </a>
          </div>
        </main>
      </section>

      <footer></footer>
    </>
  )
}
