import React from "react";
import "../../App.css";
import { motion } from "framer-motion";

const FilmOverlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0.6)" },
  };

  return (
    <motion.div
      className="FilmModalOverlay"
      onClick={close}
      variants={variants}
      initial={"closed"}
      exit={"closed"}
      animate={"open"}
      key={"overlay"}
    >
      {children}
    </motion.div>
  );
};

export default FilmOverlay;
