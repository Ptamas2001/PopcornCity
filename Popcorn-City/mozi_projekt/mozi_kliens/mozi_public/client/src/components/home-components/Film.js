import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FilmOverlay from "./FilmOverlay";
import FilmCard from "./FilmCard";
import FilmModal from "./FilmModal";

const Film = ({ film, authState }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <FilmCard film={film} open={openModal} />
      <AnimatePresence>
        {open && (
          <FilmOverlay close={closeModal}>
            <FilmModal authState={authState} film={film} close={closeModal} />
          </FilmOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Film;
