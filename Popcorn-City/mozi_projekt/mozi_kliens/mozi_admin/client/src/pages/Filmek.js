import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { usePromiseTracker } from "react-promise-tracker";
import { useNavigate } from "react-router-dom";
import * as Loader from "react-loader-spinner";
import "../App.css";

import MufajLista from "../components/filmek-components/MufajLista";
import FilmLista from "../components/filmek-components/FilmLista";
import Szuro from "../components/filmek-components/Szuro";
import SearchBar from "../components/filmek-components/SearchBar";
import MusorComponent from "../components/filmek-components/MusorComponent";

function Filmek() {
  const [mufajok, setMufajok] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [search, setSearch] = useState("");
  const [activeList, setActiveList] = useState(0);
  const [list, setList] = useState([]);


  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);


  const LoadingIndicatior = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "200px"
          }}
        >
          <Loader.Triangle color="#22A39F" height="200" width="200" />
        </div>
      )
    );
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/list/8226663?api_key=4969de61f07d9eafd9d99106e1fcbb35&language=hu-HU"
    );
    const filmek = await data.json();
    console.log(filmek.items);
    setList(filmek.items);
  };

  const fetchGenres = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4969de61f07d9eafd9d99106e1fcbb35&language=hu-HU"
    );
    const genres = await data.json();

    setMufajok(genres.genres);
  };

  return (
    <div className="container">
      <SearchBar setSearch={setSearch} />
      <div className="wrapper">
        <div className="menubar">
          <label className="moviesnumber">2280 Film</label>
          <motion.div className="buttons" whileHover={{scale: 1.05}}>
          <motion.button className={activeList === 0 ? "activeBtn" : ""} onClick={() => setActiveList(0)}>
            Film hozzáadás listához
            </motion.button>
          </motion.div>
          <motion.div className="buttons" whileHover={{scale: 1.05}}>
            <motion.button className={activeList === 2 ? "activeBtn" : ""} onClick={() => setActiveList(2)}>Lista módosítása</motion.button>
          </motion.div>
          <div className="szures">
            <Szuro setSortBy={setSortBy} sortBy={sortBy} />
          </div>
        </div>
        <div className="filmscategwrapper">
          {activeList === 0 && (
            <>
              <MufajLista
                setActiveGenre={setActiveGenre}
                activeGenre={activeGenre}
                mufajok={mufajok}
              />
              <div className="filmsrow">
                
              <LoadingIndicatior />
              
                <FilmLista
                  activeGenre={activeGenre}
                  sortBy={sortBy}
                  search={search}
                  setfilmlistaa={setList}
                  filmlistaa={list}
          
                />
                
              </div>
            </>
          )}
          </div>
          {activeList === 1 && <></>}

          {activeList === 2 &&
          <>
          <MusorComponent filmek={list} setFilmek={setList}/>
          </>}
        </div>
      </div>
  );
}

export default Filmek;
