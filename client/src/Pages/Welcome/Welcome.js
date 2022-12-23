import React, { useState } from 'react'

import WelcomeContent from '../../Components/WelcomeContent'
import WelcomeHeader from '../../Components/WelcomeHeader'

import './welcome.css'

const Welcome = ({setSerchInput}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
return (
    <div className='welcome--page section__padding'>
        <WelcomeHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <WelcomeContent setSerchInput={setSerchInput} />
    </div>
  )
}

export default Welcome