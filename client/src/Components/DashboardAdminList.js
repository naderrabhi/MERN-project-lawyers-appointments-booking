import React from 'react'
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner'
import DashboardAdminCard from './DashboardAdminCard'

const DashboardAdminList = ({role,name,Loading,Users}) => {
  return (
    <div className='dashboardAdminList'>
      {Loading ? <LoadingSpinner /> : Users && Users.map(user => <DashboardAdminCard role={role} name={name} key={user._id} user={user} />)}
    </div>
  )
}

export default DashboardAdminList