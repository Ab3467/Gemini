import React from 'react'
import assets from "../../assets/assets.js"

export default function Side() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={assets.menu_icon} alt="" className='menu'/>
          <div className='new-chat'>
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
          </div>
      </div>
    </div>
  )
}
