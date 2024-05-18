import React from 'react'

export default function Navbar(props) {
  return (
    <nav className=' flex mx-auto'>
        <div className='logo'>
            <span className='justify-between flex bg-slate-800 text-slate-200'>Tasks</span>
        </div>
        <ul>
            <li>Home</li>
            <li>Youe Tasks</li>
        </ul>
    </nav>
  )
}
