import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import MusorEgyenkent from '../components/musor-components/MusorEgyenkent';
import SelectDay from '../components/musor-components/SelectDay';
function Musor({ authState, logout }) {

    const [musors, setMusors] = useState([]);
    const [date, setDatee] = useState(new Date().toISOString().slice(0, 10));

    useEffect(() => {
        axios.get(`http://localhost:3002/musor/getByDate/${date}`).then((response)=> {
            setMusors(response.data);
        })
      }, [date])

    return (
        <div className='container'>
            <Header authState={authState} logout={logout} oldalNeve={"Műsor"} />
            <SelectDay setDatee={setDatee}/>
            <div className='musor-box-container'>
            {musors.map((musor) => {
               return <MusorEgyenkent musor={musor} date={date}/>
            })}
            {musors.length === 0 && 
            <p>Erre a napra nincs felvéve film.</p>}
            </div>
        </div>
    )
}

export default Musor