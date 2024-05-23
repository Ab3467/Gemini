import React,{useState} from 'react'
import { assets } from "../../assets/assets.js"
import "./SideBar.css"

export default function Side() {

  const [extended,setExtended] = useState(false)

  
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={assets.menu_icon} alt="" className='menu' />
        <div className='new-chat'>
          <img onClick={()=>setExtended(prev=>!prev)} src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        { extended? <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react ...</p>
          </div>
        </div>: null }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
         {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}
