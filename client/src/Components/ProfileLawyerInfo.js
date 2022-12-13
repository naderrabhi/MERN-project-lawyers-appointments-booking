import React from 'react'
import {FaFacebook,FaLinkedin,FaInstagramSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileLawyerInfo = ({Profile}) => {
  return (
    <div className='profileLawyerInfo page--relative'>
        <div className="profileLawyerInfo--img">
            <img src={Profile.image} alt={Profile.name} />
            <Link to={`/avocats/editer/${Profile.lawyerID && Profile.lawyerID._id}`}><button className='btn--costum'>Editer votre profil</button></Link>  
        </div>
        <div className="profileLawyerInfo--details">
          {Profile.name && <p>Nom et Prénom : {Profile.name}</p>}
          {Profile.specialty && <p>Spécialté : {Profile.specialty}</p>}
          {Profile.address && <p>Adresse : {Profile.address}</p>}
          {Profile.phone && <p>Téléphone : {Profile.phone}</p>}
          {Profile.lawyerID && <p>E-mail : {Profile.lawyerID.email}</p>}
          {Profile.bio && <p>Bio : {Profile.bio}</p>}
          {Profile.mon_fri && <p>Lundi au vendredi : {Profile.mon_fri}</p>}
          {Profile.sat_sun && <p>Samedi et dimanche : {Profile.sat_sun}</p>}
          {Profile.price && <p>Prix de consultation : {Profile.price}</p>}
            <div className="lawyer--social">
              {Profile.facebook ? <a href={Profile.facebook}><FaFacebook /></a> : <p className='social--p'>FACEBOOK n'a pas été ajouté</p>}
              {Profile.linkedin ? <a href={Profile.linkedin}><FaLinkedin /></a> : <p className='social--p'>LINKEDIN n'a pas été ajouté</p>}
              {Profile.instagram ? <a href={Profile.instagram}><FaInstagramSquare /></a> : <p className='social--p'>INSTAGRAM n'a pas été ajouté</p>}
            </div>
        </div>
    </div>
  )
}

export default ProfileLawyerInfo