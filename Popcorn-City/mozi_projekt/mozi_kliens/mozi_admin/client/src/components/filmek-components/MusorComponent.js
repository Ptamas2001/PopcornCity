import React, { useEffect } from "react";
import "../../App.css";
import axios from "axios";
import FilmEgyenkent from "./FilmEgyenkent";
function MusorComponent({ filmek, setFilmek }) {


  
  const deleteFromList = (id) => {
    axios
      .post(
        "https://api.themoviedb.org/3/list/8226663/remove_item?api_key=4969de61f07d9eafd9d99106e1fcbb35&session_id=3542e4139eda1b70861f89cdb7a7af9ad9d6dfd7",
        { media_id: id }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setFilmek(
            filmek.filter((val) => {
              return val.id != id;
            })
          );
        }
      });
  };
  return (
    <div className="musorcomponent">
      {filmek.map((film) => {
        return (
          <FilmEgyenkent
            film={film}
            key={film.id}
            deleteFromList={deleteFromList}
          />
        );
      })}
    </div>
  );
}

export default MusorComponent;
