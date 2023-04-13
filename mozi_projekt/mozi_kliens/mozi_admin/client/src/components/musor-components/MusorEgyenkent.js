import React, { useEffect, useState } from 'react';
import Chairs from './Chairs';
import moment from 'moment';
import axios from 'axios';

function MusorEgyenkent({ musor }) {

    const [show, setShow] = useState(false);
    const [szekek, setSzekek] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500)
    })

    useEffect(() => {
        axios.get(`http://localhost:3002/szekek/${musor.id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setSzekek(response.data);
        })
    }, [musor])

    return (
        <div className='chair-box-container'>
        <div className='chair-container'>
        <h1>{musor.movieTitle}</h1>
            <h3>{moment(musor.startAt).format('YYYY-MM-DD HH:MM')}</h3>
            {show &&
                <Chairs szekek={szekek} />
            }

        </div>
        </div>
    )
}

export default MusorEgyenkent