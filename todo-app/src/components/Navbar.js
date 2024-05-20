import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <>
    <nav>
       <ul className='flex p-4 items-center m-3 gap-5'>
        <li>Home</li>
        <li>About</li>
       </ul>
    </nav>
    <Button/>
    </>
  )
}
