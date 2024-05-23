import React,{useState} from 'react'
import { assets } from "../../assets/assets.js"
import "./SideBar.css"

export default function Side() {

  const [extended,setextended] = useState()
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={assets.menu_icon} alt="" className='menu' />
        <div className='new-chat'>
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react ...</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Setting</p>
        </div>
      </div>
    </div>
  )
}
