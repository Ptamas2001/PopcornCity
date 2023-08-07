import React from 'react';
import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((film) =>
      film.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>Összes</button>
      <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Vígjáték</button>
      <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Akció</button>
      <button className={activeGenre === 27 ? "active" : ""} onClick={() => setActiveGenre(27)}>Horror</button>
    </div>
  );
}

export default Filter;
