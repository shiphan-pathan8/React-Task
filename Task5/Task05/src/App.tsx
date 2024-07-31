
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import About from './component/About'
import Home from './component/Home'
import Contact from './component/Contact'
import Navbar from './component/NavBar'
import User from './component/User'

import React from 'react'

const App: React.FC = () => {
    const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/> </> 
    },
    {
      path: "/contact",
      element:<><Navbar/> <Contact/> </> 
    },
    {
      path: "/about",
      element:<><Navbar/> <About/> </>
    },
    {
      path: "/user/username",
      element:<><Navbar/> <User/> </>
    },
  ])

  return (
    <> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
