import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import slides from "../components/Slides";
import ImageSlider from "../components/home-components/ImageSlider";
import axios from "axios";
import MusorComponent from "../components/musor-components/MusorComponent";
function Musor() {
  const [musors, setMusors] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:3002/musor/getAllMusor").then((response) => {
        setMusors(response.data);
      })
    } catch {
      console.log("error");
    }
  }, [])
  const csoportok = musors.reduce((csoportok, musor) => {
    const datum = musor.startAt.split('T')[0];
    if (!csoportok[datum]) {
      csoportok[datum] = [];
    }
    csoportok[datum].push(musor);
    return csoportok;

  }, {});
  const csoportTombok = Object.keys(csoportok).map((datum) => {
    const ticketsLeft = csoportok.ticketsLeft;


    return {
      datum,
      musorok: csoportok[datum],
    };
  });

  return (
    <>
      <motion.div className="hero-slider" data-carousel>
        <ImageSlider slides={slides} />
      </motion.div>

      <h1 className="movies">Műsor</h1>
      <div className="movies-container">
        {csoportTombok.map((csoportTomb, key) => {

          return <MusorComponent musor={csoportTomb} key={key} />

        })}
      </div>

    </>
  );
}

export default Musor;
