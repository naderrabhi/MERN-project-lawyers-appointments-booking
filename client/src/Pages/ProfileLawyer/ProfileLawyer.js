import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import Navbar from '../Navbar/Navbar';

import ProfileLawyerAppointment from '../../Components/ProfileLawyerAppointment'
import ProfileLawyerCoverImage from '../../Components/ProfileLawyerCoverImage';
import ProfileLawyerContent from '../../Components/ProfileLawyerContent';
import ProfileLawyerInfo from '../../Components/ProfileLawyerInfo';

import {getAllAppointment} from '../../JS/actions/appointment'
import {getMyProfile} from '../../JS/actions/profile'

import './profilelawyer.css'

const ProfileLawyer = () => {
  const Profile = useSelector((state) => state.profile.Profile);
  const Loading = useSelector((state) => state.profile.loading);
  const Appointments = useSelector((state) => state.appointment.Appointments);
  const LoadingAppointments = useSelector((state) => state.appointment.loading);
  
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
      {Loading ? <LoadingSpinner /> : <>
      <Navbar />
      <ProfileLawyerCoverImage />
      <ProfileLawyerContent ><><ProfileLawyerInfo Profile={Profile} /><ProfileLawyerAppointment LoadingAppointments={LoadingAppointments} Appointments={Appointments} /></></ProfileLawyerContent>
      </>}
      
    </div>
  )
}

export default ProfileLawyer