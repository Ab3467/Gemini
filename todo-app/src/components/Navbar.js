import React from 'react'

export default function Navbar(props) {
  return (
    <nav className='justify-between flex bg-indigo-900 text-white py-2'>
        <div className='logo'>
            <span className=' font-bold text-xl mx-8'>Tasks</span>
        </div>
        <ul className='flex gap-8 mx-9'> 
            <li className=' cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className=' cursor-pointer hover:font-bold transition-all'>Youe Tasks</li>
        </ul>
    </nav>
  )
}
