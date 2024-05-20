import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <>
    <nav>
       <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-grey-500'>
        <li>Home</li>
        <li>About</li>
       </ul>
    </nav>
    <Button/>
    </>
  )
}
