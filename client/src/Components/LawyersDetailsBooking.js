import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {createAppointment} from "../JS/actions/appointment"

const LawyersDetailsBooking = ({avocatID, Profile}) => {
  const [booking, setBooking] = useState({
    subject: "",
    description: "",
    date: "",
  });
  console.log(booking.date)
  const dispatch = useDispatch();

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(createAppointment(avocatID, booking));
    setBooking({subject : "", description: "", date:""})
  };
  return (
    <div className='lawyersDetailsBooking'>
      <div className="lawyersDetailsBooking--text">
        <p>Faites votre réservation</p>
        <p>Lundi au Vendredi : {Profile.mon_fri}</p>
        <p>Samedi et Dimanche : {Profile.sat_sun}</p>
      </div>
      <div className="lawyersDetailsBooking--book">
        <form onSubmit={handleSave} className='lawyersDetailsBooking--book_form'>
          <div className="lawyersDetailsBooking--book_date">
            <label htmlFor="date">Date</label>
            <input value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} id="date" name="date" placeholder="Date" type="date" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_subject">
            <label htmlFor="subject">Sujet</label>
            <input value={booking.subject} onChange={(e) => setBooking({ ...booking, subject: e.target.value })} id="subject" name="subject" placeholder="Sujet" type="text" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_subject">
            <label htmlFor="message">Message</label>
            <textarea value={booking.description} onChange={(e) => setBooking({ ...booking, description: e.target.value })} cols="30" rows="10" id="message" name="message" placeholder="Message" type="text" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_btn">
            <button className="btn--costum btn--costum_hover">
                réservez-vous
            </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default LawyersDetailsBooking