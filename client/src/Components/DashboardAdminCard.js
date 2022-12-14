import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteAppointmentByAdmin,deletePostByAdmin, deleteUser } from "../JS/actions/admin";
import { deleteProfile } from "../JS/actions/profile";

const DashboardAdminCard = ({role,name,user}) => {
  const dispatch = useDispatch();

  return (
    <div className="user--card">
        <img src={(user.profileId && user.profileId.image) || 'test.jpg'} alt="Avatar" className="image" />
        <div className="user--overlay">
            <div className="user--text">
                <p>{user.firstName} {user.lastName}</p>
                <p>Role : {user.role}</p>
                {user.specialty && <p>Specialité : {user.specialty}</p>}
                <p>E-mail : {user.email}</p>
                {user.phone && <p>Tel : {user.phone}</p>}
                {user.role !== "admin" && <div className="text--action">
                    <button onClick={() => {
                    dispatch(deleteUser(user._id, role, name));
                    dispatch(deleteProfile(user._id));
                    dispatch(deleteAppointmentByAdmin(user.role === 'lawyer' && user._id))
                    dispatch(deletePostByAdmin(user.role === 'lawyer' && user._id))
                  }} className='btn--costum'>supprimer</button>
                </div>}
            </div>
        </div>
      </div>
  )
}

export default DashboardAdminCard