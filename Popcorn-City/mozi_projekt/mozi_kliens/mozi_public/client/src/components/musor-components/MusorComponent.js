import React from 'react'
import moment from 'moment'

function MusorComponent({musor, key}) {
  return (
    <>

      <div className="movies-box shadow">
      
    <h2><i class="fa-solid fa-calendar-days"></i>{musor.datum}</h2>
    <div className="line"><i>&nbsp;</i></div>
    {musor.musorok.map((value) => {
        return (
            <>
            <div className="movies-box">
            <h3>{value.movieTitle}</h3>
            </div>
            <div className="movies-box">
            <h4><i class="fa-solid fa-hourglass-start"></i>{moment(value.startAt).format("hh:mm")}</h4>
            </div>
            <div className="line"><i>&nbsp;</i></div>
            </>
        )
    })}
    
    </div>
    </>
  )
}

export default MusorComponent