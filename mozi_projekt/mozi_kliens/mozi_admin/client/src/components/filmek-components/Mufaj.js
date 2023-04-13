import React from 'react'

function Mufaj({genre, setActiveGenre, activeGenre}) {
  return (
    <div><li><button className={activeGenre === genre.id ? "active" : ""} onClick={() => setActiveGenre(genre.id)}>{genre.name}</button></li></div>
  )
}

export default Mufaj