import {createBrowserRouter} from "react-router-dom"
import {Homepage} from "./application/pages/homepage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
])
