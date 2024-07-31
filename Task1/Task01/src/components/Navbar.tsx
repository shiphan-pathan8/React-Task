import React from "react"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#about" className="text-white">About</a></li>
        <li><a href="#services" className="text-white">Services</a></li>
        <li><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

