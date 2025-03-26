import React from 'react'
import { SiTodoist } from "react-icons/si";

function Navbar() {
  return (
    <nav className="flex justify-between bg-violet-800 text-white py-3">
        <div className='logo'>
            <span className="flex font-bold text-2xl md:mx-10 mx-5"><SiTodoist  className='m-1'/>iTask</span>
        </div>
        <ul className="flex gap-5 mx-5 md:gap-10 md:mx-10">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
