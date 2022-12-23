import React from 'react'
import { Link } from 'react-router-dom'

const LawyerCard = ({profile}) => {
  return (
    <Link to={`/avocats/${profile.lawyerID._id}`}>
      <div className="lawyer--card">
        <img src={profile.image} alt="Avatar" className="image" />
        <div className="overlay">
            <div className="text">
                <p>{profile.name}</p>
                <p>{profile.specialty}</p>
                <p>{profile.address}</p>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default LawyerCard