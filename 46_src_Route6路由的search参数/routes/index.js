import About from "../pages/About"
import Home from "../pages/Home"
import Message from '../pages/Message'
import News from '../pages/News'
import { Navigate } from "react-router-dom"
import Detail from "../pages/Detail"

//要求写数组，因为Routes里面可能有多个Route
// eslint-disable-next-line import/no-anonymous-default-export
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
        element: <Home/>,
        children: [
          {
            path: 'news',
            element: <News/>,
          },
          {
            path: 'message',
            element: <Message/>,
            children: [
              {
                path: 'detail',
                element: <Detail/>
              },
            ]
          }

        ]
        
      }
]