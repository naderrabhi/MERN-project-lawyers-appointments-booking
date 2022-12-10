import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ProfileLawyerAppointment from '../../Components/ProfileLawyerAppointment'
import ProfileLawyerInfo from '../../Components/ProfileLawyerInfo'
import {getMyProfile} from '../../JS/actions/profile'
import {getAllAppointment} from '../../JS/actions/appointment'

import './profilelawyer.css'

const ProfileLawyer = () => {
  const Profile = useSelector((state) => state.profile.Profile);
  const Appointments = useSelector((state) => state.appointment.Appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(getAllAppointment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='profileLawyer--page section__padding'>
      <ProfileLawyerInfo Profile={Profile} />
      <ProfileLawyerAppointment Appointments={Appointments} />
    </div>
  )
}

export default ProfileLawyer