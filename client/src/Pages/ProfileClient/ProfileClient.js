import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProfileClientInfo from '../../Components/ProfileClientInfo'
import ProfileClientAppoinment from '../../Components/ProfileClientAppoinment'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import {getAllAppointment} from '../../JS/actions/appointment'

import './profileclient.css'
import Navbar from '../Navbar/Navbar'

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
      <Navbar />
      <div className="profileClient--page_body">
        <ProfileClientInfo User={User} />
        {Loading ? <LoadingSpinner /> : Appointments && Appointments.map(appointment => <ProfileClientAppoinment key={appointment._id} appointment={appointment} />)}
      </div>
    </div>
  )
}

export default ProfileClient