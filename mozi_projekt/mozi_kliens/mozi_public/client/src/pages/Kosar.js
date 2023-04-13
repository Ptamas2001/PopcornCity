import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/home-components/ImageSlider";
import slides from "../components/Slides";
import axios from "axios";
import KosarMain from "../components/kosar-components/KosarMain";
import { Toaster, toast } from 'react-hot-toast';

function Kosar({ authState }) {
  const [kosarTartalma, setKosarTartalma] = useState([]);
  const [filmek, setFilmek] = useState([]);



  useEffect(() => {
    axios
      .get(`http://localhost:3002/kosar/${authState.username}`)
      .then((response) => {
        if (response.data.error) {
          toast.error("Hiba történt!");
        } else {
          setKosarTartalma(response.data);
        }
      });
  }, []);

  useEffect(() => {
    kosarTartalma.map((item) => {
      fetchFilmek(item);
    });
  }, [kosarTartalma]);

  const fetchFilmek = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.movieId}?api_key=4969de61f07d9eafd9d99106e1fcbb35&language=hu-HU`
    )
    const film = await data.json();
    var musorSzekekkel = [];
    musorSzekekkel.push({
      film: film,
      musorId: movie.musorId,
    });
    setFilmek(elozo => [...elozo, musorSzekekkel]);
    
  };

  

  return (
    <>
      <motion.div className="hero-slider" data-carousel>
        <ImageSlider slides={slides} />
      </motion.div>
      <h1>Jegyfoglalás</h1>
      <Toaster position="middle-right" reverseOrder={false} />
      {filmek.map((value, key) => {
        return (
          <KosarMain film={value} key={key} username={authState.username}/>
        )
      })}
    </>
  );
}

export default Kosar;
