import React from 'react'

const ProfileClientInfo = ({User}) => {
  return (
    <div className='profileClientInfo'>
      {User.firstName && <p>Prénom : {User.firstName}</p>}
      {User.lastName && <p>Nom : {User.lastName}</p>}
      {User.email && <p>E-mail : {User.email}</p>}
    </div>
  )
}

export default ProfileClientInfo