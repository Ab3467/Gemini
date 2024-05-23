import React from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"

export default function Main() {
  return (
    <div className='main'>
      <div className="nav">
      <p>Gemini</p>
        <img src={assets.gemini_icon} alt="" />
      </div>
    </div>
  )
}
