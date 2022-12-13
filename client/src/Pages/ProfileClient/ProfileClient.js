import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProfileClientInfo from '../../Components/ProfileClientInfo'
import ProfileClientAppoinment from '../../Components/ProfileClientAppoinment'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import {getAllAppointment} from '../../JS/actions/appointment'

import './profileclient.css'

const ProfileClient = () => {
  const User = useSelector((state) => state.auth.User)
  const Appointments = useSelector((state) => state.appointment.Appointments);
  const Loading = useSelector((state) => state.appointment.loading);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllAppointment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='profileClient--page section__padding'>
      <ProfileClientInfo User={User} />
      {Loading ? <LoadingSpinner /> : Appointments.map(appointment => <ProfileClientAppoinment key={appointment._id} appointment={appointment} />)}
    </div>
  )
}

export default ProfileClient