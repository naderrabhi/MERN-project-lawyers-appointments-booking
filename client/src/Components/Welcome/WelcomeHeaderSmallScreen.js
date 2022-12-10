import React from 'react'
import { FaAlignJustify} from "react-icons/fa";
import WelcomeHeaderOvarlay from './WelcomeHeaderOvarlay';

const WelcomeHeaderSmallScreen = ({toggleMenu,setToggleMenu}) => {
  return (
    <div className='welcome--page_header-smallscreen'>
        <FaAlignJustify className='overlay--open' onClick={()=>setToggleMenu(true)} />
        {toggleMenu && <WelcomeHeaderOvarlay setToggleMenu={setToggleMenu} />}       
    </div>
  )
}

export default WelcomeHeaderSmallScreen