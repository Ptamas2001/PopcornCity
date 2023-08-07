import React, { useState, useEffect } from 'react'

function SelectDay({ setDatee }) {

    const [selected, setSelected] = useState(new Date().toLocaleDateString('hu-hu', { weekday: 'long' }))

    var day1 = new Date();
    var day2 = new Date();
    day2.setDate(day2.getDate() + 1)
    var day3 = new Date();
    day3.setDate(day3.getDate() + 2)
    var day4 = new Date();
    day4.setDate(day4.getDate() + 3)
    var day5 = new Date();
    day5.setDate(day5.getDate() + 4)
    var day6 = new Date();
    day6.setDate(day6.getDate() + 5)
    var day7 = new Date();
    day7.setDate(day7.getDate() + 6)

    const handleClick = (datum) => {
        setSelected(datum.toLocaleDateString('hu-hu', { weekday: 'long' }));
        setDatee(datum.toISOString().slice(0, 10));
    }


    return (
        <div className='select-day-container'>
            <div onClick={() => handleClick(day1)} className={selected === day1.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day1.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
            <div onClick={() => handleClick(day2)} className={selected === day2.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day2.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
            <div onClick={() => handleClick(day3)} className={selected === day3.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day3.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
            <div onClick={() => handleClick(day4)} className={selected === day4.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day4.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
            <div onClick={() => handleClick(day5)} className={selected === day5.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day5.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
            <div onClick={() => handleClick(day6)} className={selected === day6.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day6.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
            <div onClick={() => handleClick(day7)} className={selected === day7.toLocaleDateString('hu-hu', { weekday: 'long' }) ? "day dayselected" : "day"}>
                <h1>{day7.toLocaleDateString('hu-hu', { weekday: 'long' })}</h1>
            </div>
        </div>
    )
}

export default SelectDay