import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import LawyersDetailsBooking from '../../Components/LawyersDetailsBooking'
import LawyersDetailsInfo from '../../Components/LawyersDetailsInfo'
import { getOneProfile } from '../../JS/actions/profile'

import './lawyersdetails.css'

const LawyersDetails = () => {
  const {avocatID} = useParams()
  const Profile = useSelector((state) => state.profile.Profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile(avocatID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className='lawyerDetails--page section__padding'>
        <LawyersDetailsInfo Profile={Profile} />
        <LawyersDetailsBooking avocatID={avocatID} Profile={Profile}/>
    </div>
  )
}

export default LawyersDetails