import About from "../pages/About"
import Home from "../pages/Home"
import { Navigate } from "react-router-dom"

//要求写数组，因为Routes里面可能有多个Route
export default[
    {
        path: '/',
        element:<Navigate to="about"/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/home',
        element: <Home/>
      }
]