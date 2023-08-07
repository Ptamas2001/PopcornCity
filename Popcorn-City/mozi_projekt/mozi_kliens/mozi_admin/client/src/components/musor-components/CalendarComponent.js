import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import moment from 'moment'
import {motion} from "framer-motion";
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import MusorBoxComponent from './MusorBoxComponent';

function CalendarComponent() {

    const [datum, setDatum] = useState(new Date().toISOString().slice(0, 10));
    const [musorFromDate, setMusorFromDate] = useState([]);
    console.log(datum);


      useEffect(() => {
        axios.get(`http://localhost:3002/musor/getByDate/${datum}`).then((response)=> {
            setMusorFromDate(response.data);
        })
      }, [datum])

      const modalVariants = {
        open: {
          opacity: 1,
          transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
      };
      

  return (
    <>
    <div className='musor-container'>
      <div className='show-content'>
    <div className='naptar-box'>
    <Calendar onChange={datum => setDatum(moment(datum).format())} value={datum} />
    </div>
        <motion.div layout className='musor-box' variants={modalVariants}>
          <div className='musor-text'>
        <h1>Műsor</h1>
        </div>
            <h1>{moment(datum.toString().split('T')[0]).format('MMMM DD')}</h1>
            {musorFromDate.length === 0 && (<p>Nem található felvett film ezen a dátumon.</p>)}
            {musorFromDate.map((musor, key) => {
              return (
              <MusorBoxComponent musor={musor} key={key} datum={datum} setDatum={setDatum} />
              )
            })}
            
        </motion.div>
        </div>
    </div>
   
    </>
  )
}

export default CalendarComponent