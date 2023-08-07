import React, { useState } from "react";
import moment from "moment";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";

function JegyfoglalasDatumok({ authState, musor, key }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const submitKosarhozAdNincs = () => {
    if(!authState.status){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Előbb jelentkezz be!",
        showConfirmButton: false,
        timer: 1500,
      });
    }else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Nincs több jegy!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  };

  const submitKosarhozAd = (film) => {

    if(!authState.status){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Előbb jelentkezz be!",
        showConfirmButton: false,
        timer: 1500,
      });
    }else {


    const data = {
      username: authState.username,
      movieId: film.movieId,
      musorId: film.id,
    };

    axios
      .post(
        "http://localhost:3002/kosar/hozzaad",
        {
          cart: data,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: response.data.error,
            desc: "asd",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sikeresen hozzáadva a kosárhoz!",
            desc: "asd",
            showConfirmButton: false,
            timer: 1500,
          });
          
        }
      });
    }
  };

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  return (
    <div key={key} className="center">
      <motion.div variants={modalVariants} className="button-container">
        <motion.div
          className="jegyfoglalasbutton at_the_same_time"
          onClick={() => setOpen(!open)}
        >
          <p>{moment(musor.datum).format("MMM. DD.")}</p>
        </motion.div>

        <motion.div variants={modalVariants} className="foglalas-container">
          {open &&
            musor.musorok.map((value) => (
              <>
                <motion.div
                  variants={modalVariants}
                  whileHover={{ scale: 1.1 }}
                  className="foglalasok"
                >
                  <span className="datumok">
                    {moment(value.startAt).format("HH:MM")}
                  </span>
                  {value.dimension === "3D" && (
                    <i
                      title="3D-s film"
                      className="fa-sharp fa-solid fa-glasses"
                    ></i>
                  )}
                  <span>
                    <motion.i
                      onClick={() => {
                        value.ticketsLeft === 0
                          ? submitKosarhozAdNincs()
                          : submitKosarhozAd(value);
                      }}
                      whileHover={{ scale: 1.2 }}
                      className="fa-solid fa-basket-shopping"
                    ></motion.i>
                  </span>
                </motion.div>
              </>
            ))}
            
        </motion.div>
      </motion.div>
      
    </div>
  );
}

export default JegyfoglalasDatumok;
