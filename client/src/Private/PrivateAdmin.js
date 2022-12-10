import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateAdmin = ({children}) => {
    const User = useSelector((state) => state.auth.User);
  return (
    <div>
        {User && User.role === 'admin' ? children : <Navigate to='/' />}
    </div>
  )
}

export default PrivateAdmin