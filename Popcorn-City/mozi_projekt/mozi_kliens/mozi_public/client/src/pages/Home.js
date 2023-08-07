import React from "react";
import ImageSlider from "../components/home-components/ImageSlider";
import "../App.css";
import FilmekKezdolap from "../components/home-components/FilmekKezdolap";
import {motion} from "framer-motion";
import slides from "../components/Slides";

function Home({authState}) {
  return (
    <div className="Home">
      <motion.div className="hero-slider" data-carousel>
        <ImageSlider slides={slides} />
      </motion.div>
    <div className="FilmekBody">
      <FilmekKezdolap authState={authState}/>
      </div>

      
    </div>
  );
}

export default Home;
