import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSettings, FiUsers } from "react-icons/fi";
import { ImStatsDots, ImTicket } from "react-icons/im";
import { GiFilmStrip } from "react-icons/gi";
import { AiOutlineDollarCircle, AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import {BiShowAlt} from 'react-icons/bi'
function Navbar({authState, logout}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState(0);

  const openMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="container">
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus icon"></i>
          <motion.i whileTap={{ scale: 1.2 }} id="btn" onClick={openMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18C3.71667 18 3.47933 17.904 3.288 17.712C3.096 17.5207 3 17.2833 3 17C3 16.7167 3.096 16.4793 3.288 16.288C3.47933 16.096 3.71667 16 4 16H20C20.2833 16 20.5207 16.096 20.712 16.288C20.904 16.4793 21 16.7167 21 17C21 17.2833 20.904 17.5207 20.712 17.712C20.5207 17.904 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47933 12.904 3.288 12.712C3.096 12.5207 3 12.2833 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.47933 11.0957 3.71667 11 4 11H20C20.2833 11 20.5207 11.0957 20.712 11.287C20.904 11.479 21 11.7167 21 12C21 12.2833 20.904 12.5207 20.712 12.712C20.5207 12.904 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4Z"
                fill="#F8F8F8"
              />
            </svg>
          </motion.i>
        </div>
        <ul class="nav-list">
          <li >
            <Link to="/">
              <i onClick={() => setSelectedNav(0)} className={selectedNav === 0 ? "activeNav" : ""}>
                <AiOutlineHome />
              </i>
              <span class="links_name">Kezdőlap</span>
            </Link>
            <span class="tooltip">Kezdőlap</span>
          </li>
          <li>
            <Link to="/musor">
              <i onClick={() => setSelectedNav(1)} className={selectedNav === 1 ? "activeNav" : ""}>
                <BiShowAlt />
              </i>
              <span class="links_name">Műsor</span>
            </Link>
            <span class="tooltip">Műsor</span>
          </li>
          <li>
            <Link to="/jegyfoglalasok">
              <i onClick={() => setSelectedNav(2)} className={selectedNav === 2 ? "activeNav" : ""}>
                <AiOutlineDollarCircle />
              </i>
              <span class="links_name">Jegyfoglalások</span>
            </Link>
            <span class="tooltip">Jegyfoglalások</span>
          </li>
          <li>
            <Link to="/filmek">
              <i>
                <GiFilmStrip />
              </i>
              <span class="links_name">Filmek</span>
            </Link>
            <span class="tooltip">Filmek</span>
          </li>
          <li>
            <Link to="/felhasznalok">
              <i>
                <FiUsers />
              </i>
              <span class="links_name">Felhasználók</span>
            </Link>
            <span class="tooltip">Felhasználók</span>
          </li>
          <li>
            <Link to="/beallitasok">
              <i>
                <ImTicket/>
              </i>
              <span class="links_name">Jegy-beállítás</span>
            </Link>
            <span class="tooltip">Jegy-beállítás</span>
          </li>
 
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
