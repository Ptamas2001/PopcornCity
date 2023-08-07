import React from "react";
import { useEffect, useState } from "react";
import "../../App.css";
import Film from "./Film";
import Filter from "./Filter";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
function FilmekKezdolap({authState}) {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/list/8226663?api_key=4969de61f07d9eafd9d99106e1fcbb35&language=hu-HU"
    );
    const filmek = await data.json();
    setPopular(filmek.items);
    setFiltered(filmek.items);
  };

  return (
    <div className="FilmekKezdolap">
      <div className="szuro-container">
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <SearchBar setSearch={setSearch} />
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="felkapott-filmek"
      >
        {filtered
          .filter((film) => {
            return search.toLowerCase() === ""
              ? film
              : film.title.toLowerCase().includes(search.toLowerCase());
              
          })
          .map((movie) => {
            return <Film authState={authState} key={movie.id} film={movie} />;
          })}
      </motion.div>
    </div>
  );
}

export default FilmekKezdolap;
