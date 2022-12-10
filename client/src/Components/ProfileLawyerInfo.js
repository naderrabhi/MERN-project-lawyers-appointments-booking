import React from 'react'
import {FaFacebook,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa'

const ProfileLawyerInfo = ({Profile}) => {
  return (
    <div className='profileLawyerInfo page--relative'>
        <div className="profileLawyerInfo--img">
            <img src={Profile.image} alt={Profile.name} />
            <button className='btn--costum'>Editer votre profil</button>
        </div>
        <div className="profileLawyerInfo--details">
          {Profile.name && <p>{Profile.name}</p>}
          {Profile.specialty && <p>{Profile.specialty}</p>}
          {Profile.address && <p>{Profile.address}</p>}
          {Profile.phone && <p>{Profile.phone}</p>}
          {Profile.lawyerID && <p>{Profile.lawyerID.email}</p>}
          {Profile.bio && <p>{Profile.bio}</p>}
            <div className="lawyer--social">
              {Profile.facebook ? <a href={Profile.facebook}><FaFacebook /></a> : <p className='social--p'>FACEBOOK n'a pas été ajouté</p>}
              {Profile.linkedin ? <a href={Profile.linkedin}><FaTwitterSquare /></a> : <p className='social--p'>LINKEDIN n'a pas été ajouté</p>}
              {Profile.instagram ? <a href={Profile.instagram}><FaInstagramSquare /></a> : <p className='social--p'>INSTAGRAM n'a pas été ajouté</p>}
            </div>
        </div>
    </div>
  )
}

export default ProfileLawyerInfo