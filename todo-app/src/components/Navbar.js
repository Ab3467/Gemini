import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <>
    <nav>
       <ul className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200  hover:text-white'>
        <li>Home</li>
        <li>About</li>
       </ul>
    </nav>
    <Button/>
    </>
  )
}
