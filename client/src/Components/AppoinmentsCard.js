import React from 'react'
import {GiConfirmed} from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import {deleteAppointment,confirmAppointment} from '../JS/actions/appointment'

const AppoinmentsCard = ({appointment}) => {
  const dispatch = useDispatch();
  return (
    <div className="profileLawyerAppointment--app">
          <div className='profileLawyerAppointment--app_confirm'>
            {appointment.isDone && <GiConfirmed />}
            {appointment.isDone ? <p>Votre rendez-vous avec <span>{appointment.clientID.firstName} {appointment.clientID.lastName}</span> a été confirmé avec succès le <span>{appointment.date}</span></p> : <p>Vous avez un rendez-vous avec <span>{appointment.clientID.firstName} {appointment.clientID.lastName}</span> le <span>{appointment.date}</span> et voici les détails :</p>}
          </div>
          <ul>
            <li>Sujet : {appointment.subject}</li>
            <li>Message : {appointment.description}</li>
            <li>Téléphone : {appointment.phone}</li>
            <li>E-mail : {appointment.clientID.email}</li>
          </ul>
          <div className="profileLawyerAppointment--app_btn">
            {!appointment.isDone && <button onClick={() => dispatch(confirmAppointment(appointment._id))} className='btn--costum '>confirmer</button>}
            <button onClick={() => dispatch(deleteAppointment(appointment._id))} className='btn--costum '>supprimer</button>
          </div>
        </div>
  )
}

export default AppoinmentsCard