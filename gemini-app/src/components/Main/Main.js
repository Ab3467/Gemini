import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"
import { Context } from '../../context/Context'

export default function Main() {

  const {onSent,recentPrompt,showresult,loading,resultData,setInput,input} = useContext(Context)
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
        <div className="main-bottom">
          <div className="searchBox">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="" id="" placeholder='Enter prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info,including about people,so double check its result please!
          </p>
        </div>
      </div>
    </div>
  )
}
