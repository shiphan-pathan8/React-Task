import React from 'react'
import { Link } from 'react-router-dom'


const Navbar: React.FC = () => {



  return (
    <div>
      <nav className="bg-gray-500 p-4">
      <ul className="flex space-x-7">
        <Link to='/'><li className="text-white font-bold ">Home</li></Link>
        <Link  to='/about'><li className="text-white font-bold">About</li></Link>
        <Link  to='/contact'><li className="text-white font-bold">Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
