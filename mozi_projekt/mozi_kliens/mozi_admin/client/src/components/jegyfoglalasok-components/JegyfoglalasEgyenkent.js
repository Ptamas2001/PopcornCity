import React, {useState} from 'react';
import {FaTicketAlt} from 'react-icons/fa';
import moment from 'moment';
function JegyfoglalasEgyenkent({bookingsWithShowDate}) {
  return (
    <div className='jegyfoglalas-container'>
    <div className="jegyfoglalas-box">
      
        <div className="jegyfoglalas-infos">
        <div className='jegyfoglalas-title'>
        <h2>Jegyfoglalás</h2>
      </div>
        <p> {bookingsWithShowDate.booking.username}</p>
        <p>{bookingsWithShowDate.show.movieTitle}</p>
        <p><span>Vetítés dátuma:</span> {moment(bookingsWithShowDate.show.startAt).format("YYYY.MM.DD.")}</p>
        </div>
      </div>
      
     </div>
  )
}

export default JegyfoglalasEgyenkent