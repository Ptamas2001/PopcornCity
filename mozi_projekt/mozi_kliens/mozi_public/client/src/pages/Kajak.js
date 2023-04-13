import React, {useState} from 'react';
import ImageSlider from "../components/home-components/ImageSlider";
import {motion} from "framer-motion";
import slides from "../components/Slides";
import simahambi from "../assets/sima-hambi.png"
import kidhambi from "../assets/kid-hambi.png"
import fries from "../assets/fries.png"
import salad from "../assets/salad.png"
import cezarsalata from "../assets/cezarsalata.png"
import sonkasszendvics from "../assets/sonkas-szendvics.png"
import simaszendvics from "../assets/sima-szendvics.png"
import taco from "../assets/taco.png"
import pizza from "../assets/pizza.png"
import cocacola from "../assets/coca-cola.png"
import fanta from "../assets/fanta.png"
import sprite from "../assets/sprite.png"
import mountaindew from "../assets/mountain-dew.png"
import szentkiralyibubitlan from "../assets/szentkiralyi-bubitlen.png"
import szentkiralyibubis from "../assets/szentkiralyi-bubis.png"
import popcorn from "../assets/popcorn.png"
import menu1 from "../assets/menu1.png"
import menu2 from "../assets/menu2.png"
import lays from "../assets/lays-chips.png"
function Kajak() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
     <motion.div className="hero-slider" data-carousel>
        <ImageSlider slides={slides} />
      </motion.div>
      <div className="foods">
        <h1>Étel És Ital Kínálat</h1>
      <div className="food-btn-container">
          <button className={ isActive === true ? "food-active" : ""} onClick={()=> setIsActive(true)}>Ételek</button>
          <button className={isActive === false? "food-active": ""}onClick={()=> setIsActive(false)}>Italok</button>
        </div>
        {isActive  ? <div className="food-container"><div className="food-box light1">
            <div className="food-img">
              <img src={simahambi}></img>
            </div>
            <div className="food-content ">
                <p className="food-title">Hamburger</p>
                <p className="food-price">500 Ft</p>
            </div>
          </div>
          <div className="food-box light2">
            <div className="food-img">
            <img src={kidhambi}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Sajtburger</p>
                <p className="food-price">600 Ft</p>
            </div>
          </div>
          <div className="food-box light3">
            <div className="food-img">
            <img src={fries}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Sültkrumpli</p>
                <p className="food-price">350 Ft</p>
            </div>
          </div>
          <div className="food-box light4">
            <div className="food-img">
            <img src={salad}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Saláta</p>
                <p className="food-price">800 Ft</p>
            </div>
          </div>
          <div className="food-box light5">
            <div className="food-img">
            <img src={cezarsalata}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Cézársaláta</p>
                <p className="food-price">1200 Ft</p>
            </div>
          </div>
          <div className="food-box light6">
            <div className="food-img">
            <img src={sonkasszendvics}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Sonkás szendvics</p>
                <p className="food-price">450 Ft</p>
            </div>
          </div>
          <div className="food-box light7">
            <div className="food-img">
            <img src={simaszendvics}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Sima szendvics</p>
                <p className="food-price">500 Ft</p>
            </div>
          </div>
          <div className="food-box light8">
          <div className="food-img">
          <img src={taco}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Taco</p>
                <p className="food-price">500 Ft</p>
            </div>
          </div>
          <div className="food-box light9">
            <div className="food-img">
            <img src={pizza}></img>
            </div>
            <div className="food-content">
                <p className="food-title">Pizza</p>
                <p className="food-price">600 Ft</p>
            </div>
          </div>
          <div className="food-box light16">
              <div className="food-img">
              <img src={popcorn}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Popcorn</p>
                  <p className="food-price">600  Ft</p>
              </div>
            </div>
            <div className="food-box light17">
              <div className="food-img">
              <img src={menu1}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Hamburger Sültkrumplival, választható üdítővel</p>
                  <p className="food-price">500 Ft</p>
              </div>
            </div>
            <div className="food-box light18">
              <div className="food-img">
              <img src={menu2}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Saláta választható üdítővel</p>
                  <p className="food-price">500 Ft</p>
              </div>
            </div>
            <div className="food-box light19">
              <div className="food-img">
              <img src={lays}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Lays</p>
                  <p className="food-price">400 Ft</p>
              </div>
            </div>
          </div>
            : <div className="food-container" >
            <div className="food-box light10">
              <div className="food-img">
              <img src={cocacola}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Coca-cola</p>
                  <button>0.5L</button>
                  <p className="food-price">350 Ft</p>
              </div>
            </div>
            <div className="food-box light11">
              <div className="food-img">
              <img src={fanta}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Fanta</p>
                  <button>0.5L</button>
                  <p className="food-price">350 Ft</p>
              </div>
            </div>
            <div className="food-box light12">
              <div className="food-img">
              <img src={sprite}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Sprite</p>
                  <button>0.5L</button>
                  <p className="food-price">350 Ft</p>
              </div>
            </div>
            <div className="food-box light13">
              <div className="food-img">
              <img src={mountaindew}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Mountain Dew</p>
                  <button>0.5L</button>
                  <p className="food-price">400 Ft</p>
              </div>
            </div>
            <div className="food-box light14">
              <div className="food-img">
              <img src={szentkiralyibubitlan}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Szénsavmentes Szentkirályi ásványviz</p>
                  <button>0.5L</button>
                  <p className="food-price">370 Ft</p>
              </div>
            </div>
            <div className="food-box light15">
              <div className="food-img">
              <img src={szentkiralyibubis}></img>
              </div>
              <div className="food-content">
                  <p className="food-title">Szénsavas Szentkirályi ásványviz</p>
                  <button>0.5L</button>
                  <p className="food-price">500  Ft</p>
              </div>
            </div>
           </div>}
     </div>
   </>
  )
}

export default Kajak