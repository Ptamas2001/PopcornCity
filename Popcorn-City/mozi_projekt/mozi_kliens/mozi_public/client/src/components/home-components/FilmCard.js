import React from "react";
import { motion } from "framer-motion";

const FilmCard = ({ film, open }) => {
  return (
    <div className="FilmCardContainer">
      <motion.div whileHover={{ scale: 1.1 }} layout className="FilmComponent">
        <div className="FilmContainer">
          <img className="FilmImg"
            src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
            alt=""
          />
          <div className="FilmOverlay" onClick={open}>
            <i className="fa-solid fa-ticket FilmIcon" onClick={open} ></i>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FilmCard;
