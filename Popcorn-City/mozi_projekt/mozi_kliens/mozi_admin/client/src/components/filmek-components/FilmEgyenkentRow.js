import React from 'react'

function FilmEgyenkentRow({film, triggerDelete, open}) {
  return (
    <div key={film.id} className="musorbox">
        <img></img>
        <div className="musorname">
        <p>{film.title}</p>
        </div>
        <div className="musorhozzaadasa">
        <button className="plusz" onClick={open}>Hozzáadás a műsorhoz</button>
        </div>
        <div className="musorminusz">
        <button className="minusz" onClick={() => {
            triggerDelete();
        }}>
          Törlés
        </button>
        </div>
      </div>
  )
}

export default FilmEgyenkentRow