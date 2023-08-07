import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";

import { trackPromise } from "react-promise-tracker";

import Swal from "sweetalert2";

function FilmLista({ activeGenre, sortBy, search, filmlistaa, setfilmlistaa }) {
  const [filmek, setFilmek] = useState([]);

  

  useEffect(() => {
    trackPromise(fetchMovies());
  }, [activeGenre, sortBy, filmlistaa]);

  const addToList = (film) => {
    axios
      .post(
        "https://api.themoviedb.org/3/list/8226663/add_item?api_key=4969de61f07d9eafd9d99106e1fcbb35&session_id=3542e4139eda1b70861f89cdb7a7af9ad9d6dfd7",
        { media_id: film.id }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setFilmek([...filmek]);
          setfilmlistaa([...filmlistaa, film]);
          console.log("siker");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Film hozzáadása sikeres!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const fetchMovies = async () => {
    if (activeGenre === 0) {
      const data = await fetch(
        `https://api.themoviedb.org/3/list/8226663?api_key=4969de61f07d9eafd9d99106e1fcbb35&language=hu-HU`
      );
      const movies = await data.json();
      setFilmek(movies.items);
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4969de61f07d9eafd9d99106e1fcbb35&language=hu-HU&sort_by=${sortBy}&include_adult=false&include_video=false&page=1&with_genres=${activeGenre}&with_watch_monetization_types=flatrate`
      );
      const movies = await data.json();
      setFilmek(movies.results);
    }
  };

  return (
    <>
    

      {filmek
        .filter((film) => {
          return search.toLowerCase() === ""
            ? film
            : film.title.toLowerCase().includes(search.toLowerCase());
        })
        .map((film) => {
          return (
            <div className="box" key={film.id}>
              <div className="FilmContainer">
                {film.poster_path === null ? (
                  <img src="/no-image.png" alt=""></img>
                ) : (
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                    alt=""
                  ></img>
                )}
                <div className={activeGenre === 0 ? "tunes" : "circles"}>
                  <div className="rating">{film.vote_average}</div>
                  <div onClick={() => addToList(film)}>
                    <div className="addtolist">
                      <svg
                        className="plusIcon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="FilmOverlay">
                  <i className="FilmIcon">
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </div>
              <br></br>
              <p className="filmslab">{film.title}</p>
              <br></br>
              <p>{film.release_date}</p>
            </div>
          );
        })}
    </>
  );
}

export default FilmLista;
