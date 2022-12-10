import React from 'react'
import AppoinmentsCard from './AppoinmentsCard'

const ProfileLawyerAppointment = ({Appointments}) => {
  return (
    <div className='profileLawyerAppointment page--relative'>
        {Appointments.map(appointment => <AppoinmentsCard key={appointment._id} appointment={appointment} />)}
    </div>
  )
}

export default ProfileLawyerAppointment