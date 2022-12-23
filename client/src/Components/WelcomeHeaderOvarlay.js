import React from 'react'
import {FaWindowClose } from "react-icons/fa";
import LinksSmallScreen from './LinksSmallScreen';

const WelcomeHeaderOvarlay = ({setToggleMenu}) => {
  return (
    <div className="welcome--page_overlay">
        <FaWindowClose className="overlay--close" onClick={()=>setToggleMenu(false)} />
        <ul className="welcome--page_links-overlay">
            <LinksSmallScreen setToggleMenu={setToggleMenu} />
        </ul>
    </div>
  )
}

export default WelcomeHeaderOvarlay