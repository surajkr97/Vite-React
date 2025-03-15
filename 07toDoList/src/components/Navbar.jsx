import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between bg-violet-800 text-white py-3">
        <div className='logo'>
            <span className="font-bold text-2xl mx-10">iTask</span>
        </div>
        <ul className="flex gap-10 mx-10">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
