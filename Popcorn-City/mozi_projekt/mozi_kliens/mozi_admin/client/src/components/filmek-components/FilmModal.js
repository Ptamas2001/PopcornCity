import React, { useState } from "react";
import { motion } from "framer-motion";
import moment from "moment";
import axios from 'axios';
import Swal from 'sweetalert2';
import {AiOutlineCloseCircle} from 'react-icons/ai'
function FilmModal({ film, close }) {
  const [vetitesDatum, setVetitesDatum] = useState(new Date());
  const [vetitesTipusa, setVetitesTipusa] = useState("2D");

  const options = [
    { value: "2D", text: "2D" },
    { value: "3D", text: "3D" },
  ];

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const handleVetitesTipusChange = (event) => {
    setVetitesTipusa(event.target.value);
  };

  const handleVetitesDatumChange = (event) => {
    const newDate = event.target.value;
    setVetitesDatum(newDate);
  };

  const submitHozzaad = () => {


    const data = {
      movieId: film.id,
      movieTitle: film.title,
      ticketsLeft: 140,
      startAt: vetitesDatum,
      dimension: vetitesTipusa,
    };
    axios.post("http://localhost:3002/musor/hozzaad", 
    {
      musor: data,
    },
    {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }
    ).then((response) => {
      if(response.data.error) {
        console.log(response.data.error);
      }else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Műsor felvitele sikeres!",
          showConfirmButton: false,
          timer: 1500,
        });
          setVetitesTipusa("2D");
          setVetitesDatum(moment().format("LLL"));
      }
    })
  };

  return (
    <motion.div
      className="modal"
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
    >
      <div className="movie-close">
      <i onClick={close}><AiOutlineCloseCircle/></i>
      </div>
      <div className="HozzaadasModal">
        <img
          src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
          alt="film"
        ></img>
        <div className="modalbox">
          <h1>{film.title}</h1>
          <div className="vetites">
            <h3>Vetítés dátuma:</h3>
            <input
              type="datetime-local"
              onChange={handleVetitesDatumChange}
            ></input>
          </div>
          <div className="vetites">
            <h3>Vetítés típusa:</h3>
            <select value={vetitesTipusa} onChange={handleVetitesTipusChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <br></br>
          <>
          <button onClick={submitHozzaad}>Műsorhoz adás</button>
          </>
        </div>
      </div>
    </motion.div>
  );
}

export default FilmModal;
