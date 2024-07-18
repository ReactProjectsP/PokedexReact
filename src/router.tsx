import {createBrowserRouter} from "react-router-dom"
import {PokemonDetail} from "./application/pages/PokemonDetail"
import {Homepage} from "./application/pages/homepage"
import React from "react"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pokemon-detail/",
    element: <PokemonDetail />,
  },
])
