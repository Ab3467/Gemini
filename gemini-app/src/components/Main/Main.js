import React from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"

export default function Main() {
  return (
    <div className='main'>
      <div className="nav">
      <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <span>Hello,Div</span>
            <p>How can i help you?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
