import React, {useState, useEffect} from "react";
import "../../App.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import axios from "axios";
import JegyfoglalasDatumok from "./JegyfoglalasDatumok";
const FilmModal = ({ film, close, authState }) => {

const [musorok, setMusorok] = useState([]);

const csoportok = musorok.reduce((csoportok, musor) => {
  const datum = musor.startAt.split('T')[0];
  if(!csoportok[datum]) {
    csoportok[datum] = [];
  }
  csoportok[datum].push(musor);
  return csoportok;

}, {});

const csoportTombok = Object.keys(csoportok).map((datum) => {
  const ticketsLeft = csoportok.ticketsLeft;
  return{
    datum,
    musorok: csoportok[datum],
  };
});





useEffect(() => {
  axios.get(`http://localhost:3002/musor/getById/${film.id}`).then((response) => {
    setMusorok(response.data);
  })
}, [])



  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };
  const [isSelected, setIsSelected] = useState(0);

  const stars = Math.round(film.vote_average / 2);
  const starsRemain = 5 - stars;

  

  return (
    <motion.div
      className="modal"
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
    >
      <motion.img
        className="modal_image"
        alt="keeep"
        src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
        variants={imageVariants}
      ></motion.img>
      <motion.div
                className="text2"
                animate={{
                  rotate: [0, 15, -15, 0],
                  x: [0, 15, -10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <h1>Popcorn City</h1>
              </motion.div>
      <motion.div className="modal_info" variants={modalInfoVariants}>
        <motion.span className="modal_year">{film.release_date}</motion.span>
            
          <motion.div className="modal-buttons-container">
          <span className="modal_h1">{film.title}</span>
              <motion.button
                className={isSelected === 0 ? "active" : ""}
                onClick={() => setIsSelected(0)}
              >
                Leírás
              </motion.button>
              <motion.button
                className={isSelected === 1 ? "active" : ""}
                onClick={() => setIsSelected(1)}
              >
                Jegyfoglalás
              </motion.button>
          </motion.div>
        <motion.div className="star-container">
          <motion.div className="star">
            {[...Array(stars)].map((e, key) => <motion.img key={key} src="http://localhost:3000/star-regular.svg"></motion.img>)}
            {[...Array(starsRemain)].map((e, key) => <motion.img key={key} src="http://localhost:3000/star-solid.svg"></motion.img>)}
            <span>({film.vote_average})</span>
          </motion.div>
        </motion.div>
        <motion.div className="modal_row" variants={modalRowVariants}>
          
          {isSelected === 0 ? (
            <>
              <motion.span variants={modalVariants} className="modal_desc">{film.overview}</motion.span>
            </>
          ) : (
            <>
            
            {csoportTombok.map((value, key) =>
            (   
              
              <JegyfoglalasDatumok authState={authState} key={key} musor={value} />
            )
            )}
            </>
          )}
        </motion.div>
        <motion.div
          className="modal_row"
          variants={modalRowVariants}
        ></motion.div>
        <motion.button
          className="modal_close_wrapper"
          onClick={close}
          whileHover={{ scale: 1.2 }}
        >
          <IoCloseCircleOutline className="modal_close_icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FilmModal;