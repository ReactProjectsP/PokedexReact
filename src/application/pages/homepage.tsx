import * as React from "react"
// import {PokemonCard} from "../components/PokemonCard"
import {useEffect, useState} from "react"
import {axiosInstance} from "../../infra/axiosInstance"
import {PokemonCard} from "../components/PokemonCard"

export function Homepage() {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    axiosInstance.get("/pokemon?limit=12&offset=0").then((response) => {
      setData(response.data.results)
    })
  }, [])

  // const nextPokemons = () => {
  //   axiosInstance.get("/pokemon?limit=12&offset=12").then((response) => {
  //     setData(response.data.results)
  //   })
  // }

  //

  const navButtons = [
    <>
      <li>Home</li>
      <li>Pokedex</li>
      <li>Generations</li>
      <li>Type Table</li>
      <li>Videogames</li>
      <li>About</li>
    </>,
  ]

  return (
    <>
      <header className="my-5 max-w-[1280px] m-auto">
        <nav className="rounded-xl bg-slate-200 m-auto h-16">
          <ul
            className="px-4 text-gray-500 flex  h-full [&>li]:flex-1 [&>li]:flex [&>li]:items-center
           [&>li]:justify-center [&>li]:hover:cursor-pointer [&>li]:border-b-4 [&>li:hover]:border-red-400 [&>li:hover]:text-red-400">
            {navButtons}
          </ul>
          {/* <img
            src={PokemonLogo}
            className="w-[300px] m-auto"
            alt="Pokedex Logo"
          /> */}
        </nav>
      </header>
      <section className="flex pt-10 bg-homepage w-">
        <main className="max-w-[960px] ml-[290px] bg-slate-200 w-[85%] py-10 rounded-lg">
          <ul className="grid grid-cols-3 gap-x-[20px] gap-y-[50px] m-auto px-16">
            {data.map((pokemon: any, index: any) => {
              return (
                <PokemonCard
                  pokemonName={pokemon.name}
                  key={index}></PokemonCard>
              )
            })}
          </ul>
        </main>
      </section>

      <footer></footer>
    </>
  )
}
