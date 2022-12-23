import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LawyerCard from '../../Components/LawyerCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Search from '../Search/Search'

import { getAllProfiles } from '../../JS/actions/profile'

import Navbar from '../Navbar/Navbar'
import './lawyers.css'

const Lawyers = ({serchInput,setSerchInput}) => {
  const Profiles = useSelector((state) => state.profile.Profiles);
  const Loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfiles(serchInput));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serchInput])
  
  return (
    <div className='lawyers--page section__padding'>
        <Navbar />
        <Search setSerchInput={setSerchInput} />
        <div className="lawyers--page_lists">
          {Loading ? <LoadingSpinner /> : Profiles && Profiles.map(profile => <LawyerCard key={profile._id} profile={profile} />)}
        </div>
    </div>
  )
}

export default Lawyers