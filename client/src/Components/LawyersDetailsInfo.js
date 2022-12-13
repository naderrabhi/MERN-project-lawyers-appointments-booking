import React from 'react'
import {FaFacebook,FaLinkedin,FaInstagramSquare} from 'react-icons/fa'

const LawyersDetailsInfo = ({Profile}) => {
  return (
    <div className='lawyerDetailsInfo'>
        <div className='lawyerDetailsInfo--img'>
            <img src={Profile.image} alt="" />
            <p>{Profile.name}</p>
            <p>{Profile.specialty}</p>
        </div>
        <div className='lawyerDetailsInfo--bio'>
          {Profile.bio && <p>Bio : {Profile.bio}</p>}
          {Profile.address && <p>Adresse : {Profile.address}</p>}
          {Profile.lawyerID && <p>E-mail : {Profile.lawyerID.email}</p>}
          {Profile.phone && <p>Téléphone : {Profile.phone}</p>}
          {Profile.price && <p>Prix de consultation : {Profile.price}</p>}
            <div className="lawyer--social">
              {Profile.facebook && <a href={Profile.facebook}><FaFacebook /></a> }
              {Profile.linkedin && <a href={Profile.linkedin}><FaLinkedin /></a> }
              {Profile.instagram && <a href={Profile.instagram}><FaInstagramSquare /></a> }
            </div>
        </div>
    </div>
  )
}

export default LawyersDetailsInfo