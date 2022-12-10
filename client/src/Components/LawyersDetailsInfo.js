import React from 'react'
import {FaFacebook,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa'

const LawyersDetailsInfo = ({Profile}) => {
  return (
    <div className='lawyerDetailsInfo'>
        <div className='lawyerDetailsInfo--img'>
            <img src={Profile.image} alt="" />
            <p>{Profile.name}</p>
            <p>{Profile.specialty}</p>
        </div>
        <div className='lawyerDetailsInfo--bio'>
          {Profile.bio && <p>{Profile.bio}</p>}
          {Profile.address && <p>{Profile.address}</p>}
          {Profile.lawyerID && <p>{Profile.lawyerID.email}</p>}
          {Profile.phone && <p>{Profile.phone}</p>}
            <div className="lawyer--social">
              {Profile.facebook && <a href={Profile.facebook}><FaFacebook /></a> }
              {Profile.linkedin && <a href={Profile.linkedin}><FaTwitterSquare /></a> }
              {Profile.instagram && <a href={Profile.instagram}><FaInstagramSquare /></a> }
            </div>
        </div>
    </div>
  )
}

export default LawyersDetailsInfo