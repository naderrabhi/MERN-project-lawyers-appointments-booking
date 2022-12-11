import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditLawyerForm from '../../Components/EditLawyerForm'
import { getOneProfile } from '../../JS/actions/profile'

import './lawyersedit.css'

const LawyersEdit = () => {

const {avocatID} = useParams()
const Profile = useSelector((state) => state.profile.Profile);
const dispatch = useDispatch();

useEffect(() => {
dispatch(getOneProfile(avocatID));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
    <div className='editprofile--page section__padding'>
        <h3>Editer votre profil</h3>
        <div className="login--barre" />
        <EditLawyerForm Profile={Profile}/>
    </div>
)
}

export default LawyersEdit