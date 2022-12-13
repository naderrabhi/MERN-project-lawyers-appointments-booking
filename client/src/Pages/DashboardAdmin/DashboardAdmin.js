import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DashboardAdminHeader from '../../Components/DashboardAdminHeader'
import DashboardAdminList from '../../Components/DashboardAdminList'

import {getAllUser} from '../../JS/actions/admin'

import './dashboardadmin.css'

const DashboardAdmin = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("all");
  
  const Users = useSelector((state) => state.admin.Users);
  const Loading = useSelector((state) => state.admin.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser(role, name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAllUser(role, name));
    setName("");
  };

  return (
    <div className='dash--page section__padding'>
      <DashboardAdminHeader setName={setName} name={name} handleSubmit={handleSubmit} setRole={setRole} />
      <DashboardAdminList role={role} name={name} Loading={Loading} Users={Users} />
    </div>
  )
}

export default DashboardAdmin