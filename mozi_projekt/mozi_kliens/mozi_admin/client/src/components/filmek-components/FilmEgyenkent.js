import React, {useState} from "react";
import Swal from 'sweetalert2'
import FilmEgyenkentRow from "./FilmEgyenkentRow";
import FilmModal from "./FilmModal";
import FilmOverlay from "./FilmOverlay";
import {AnimatePresence} from "framer-motion";

function FilmEgyenkent({film, deleteFromList}) {

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const triggerDelete = () => {
    Swal.fire({
      title: 'Biztos törölni szeretnéd?',
      text: "Nem lesz lehetőséged visszavonni!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Igen, töröld!',
      cancelButtonText: 'Bezárás'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFromList(film.id);
        Swal.fire(
          'Törölve!',
          'Film törölve a listáról.',
          'success' 
        )
      }
    })
  }

  return (
    <div>
      <FilmEgyenkentRow open={openModal} film={film} triggerDelete={triggerDelete} />
    <AnimatePresence>
      {open && (
        <FilmOverlay close={closeModal}>
          <FilmModal film={film} close={closeModal} />
        </FilmOverlay>
      )}
    </AnimatePresence>
    </div>
  );
}

export default FilmEgyenkent;
