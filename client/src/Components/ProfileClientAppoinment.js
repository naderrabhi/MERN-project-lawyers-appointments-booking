import React from 'react'
import {GiConfirmed} from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { deleteAppointment } from '../JS/actions/appointment';

const ProfileClientAppoinment = ({appointment}) => {
  const dispatch = useDispatch();
  return (
    <div className='profileClientAppoinment'>
      <div className='profileClientAppoinment--confirm'>
        {appointment.isDone && <GiConfirmed />}
        {appointment.isDone ? <p>Votre rendez-vous avec <span>{appointment.lawyerID.firstName} {appointment.lawyerID.lastName}</span> a été confirmé avec succès le <span>{appointment.date} </span></p> : <p>Vous avez un rendez-vous avec <span>{appointment.lawyerID.firstName} {appointment.lawyerID.lastName}</span> le <span>{appointment.date}</span> et voici votre détails :</p>}
      </div>
      <ul>
          <li>Sujet : {appointment.subject}</li>
          <li>Message : {appointment.description}</li>
          <li>Téléphone : phone</li>
          <li>E-mail : {appointment.lawyerID.email}</li>
      </ul>
      <button className='btn--costum' onClick={() => dispatch(deleteAppointment(appointment._id))}>supprimer</button>
    </div>
  )
}

export default ProfileClientAppoinment