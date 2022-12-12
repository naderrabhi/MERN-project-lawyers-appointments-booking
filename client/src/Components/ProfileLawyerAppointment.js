import React from 'react'
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner'
import AppoinmentsCard from './AppoinmentsCard'

const ProfileLawyerAppointment = ({LoadingAppointments,Appointments}) => {
  return (
    <div className='profileLawyerAppointment page--relative'>
        {LoadingAppointments ? <LoadingSpinner /> : Appointments.map(appointment => <AppoinmentsCard key={appointment._id} appointment={appointment} />)}
    </div>
  )
}

export default ProfileLawyerAppointment