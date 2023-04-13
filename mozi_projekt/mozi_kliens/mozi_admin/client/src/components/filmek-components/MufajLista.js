import React from 'react'
import Mufaj from './Mufaj';

function MufajLista({mufajok, setActiveGenre, activeGenre}) {

  

  return (
    <div className="filmscateg">
      <h2>Kategóriák</h2>
      <ul>
        <li><button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>Listán lévő filmek</button></li>
        {mufajok.map((mufaj) => {return (<Mufaj key={mufaj.id} genre={mufaj} setActiveGenre={setActiveGenre} activeGenre={activeGenre} />)})}
      </ul>
    </div>
  )
}

export default MufajLista