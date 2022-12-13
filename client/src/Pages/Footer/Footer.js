import React from 'react'

import FooterAddress from '../../Components/FooterAddress'
import {data} from '../../assets/datafooter'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer--page section__padding'>
        <h1>à propos de nous</h1>
        {data.map(el => <FooterAddress key={el._id} el={el} />)}
    </div>
  )
}

export default Footer