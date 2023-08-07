import React from "react";
import ImageSlider from "../components/home-components/ImageSlider";
import {motion} from "framer-motion";
import slides from "../components/Slides";
import {Link} from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import "./jegyarak.css";
function Jegyarak() {

  
  const [listOfTickets, setlistOfTickets] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:3002/jegyarak").then((response) => {
      setlistOfTickets(response.data);
      
    });
  }, []);
  




  return (
    
    <div>
      
     <motion.div className="hero-slider" data-carousel>
        <ImageSlider slides={slides} />
      </motion.div>
      
      <h1>Jegyárak</h1>
      <div className="jegyrow">
      {listOfTickets.map((value, key) => {
        return(
          <div>
            
     
       <div className={value.isFelkapott ? "jegybox2" : "jegybox"}>
         {value.isFelkapott && (<><div className="felkapott"><h2>Felkapott</h2></div></>)}
        
        <h2>{value.types}</h2>
        <h3>{value.typeValue}</h3>
        <label>{value.infos}</label><br></br>
        <label>{value.leiras}</label><br></br>
        <div className="line"><i >&nbsp;</i></div>
        <h4>{value.price} Ft</h4>
        <Link to="/">
        <button>Vásárlás</button>
        </Link><br></br>
        <div className="descriptions">
        <svg className="tick" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" fill="black"/>
        </svg>
        <label>{value.description}</label>
        </div>
        
       </div>

      </div>
    
        )
      })} 
      </div>
      </div>
  );
}

export default Jegyarak;
