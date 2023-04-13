import React, { useState, useEffect } from "react";
import Chairs from "./Chairs";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';

function KosarMain({ film, username  }) {
  film = film[0];
  const [valasztottDB, setValasztottDB] = useState(0);
  const [musor, setMusor] = useState([]);
  const [valasztottHelyek, setValasztottHelyek] = useState([]);
  useEffect(async () => {
  await axios
      .get(`http://localhost:3002/musor/getByMusorId/${film.musorId}`)
      .then((response) => {
        setMusor(response.data);
      });
  }, []);
  console.log(film)


  return (
    <>
      
        <div className="ticket-booking-container">
        <Toaster position="middle-right" reverseOrder={false} />
          <div className="canvas-container">
         <div className="canvas">
         <img
            src={"https://image.tmdb.org/t/p/w500" + film.film.poster_path}
            alt=""
          />
          </div>
          </div>
              <Chairs
                setMusor={setMusor}
                setValasztottDB={setValasztottDB}
                valasztottDB={valasztottDB}
                setValasztottHelyek={setValasztottHelyek}
                valasztottHelyek={valasztottHelyek}
                musorId={film.musorId}
                musor={musor}
                username={username}
              />
              </div>
    </>
  );
}

export default KosarMain;
