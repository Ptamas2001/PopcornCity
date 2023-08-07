import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from 'axios';
import JegyfoglalasEgyenkent from "../components/jegyfoglalasok-components/JegyfoglalasEgyenkent";
import SearchBar from "../components/felhasznalok-components/SearchBar";
import {BiSearchAlt} from 'react-icons/bi'
function Jegyfoglalasok({ authState, logout }) {
  const [bookingsWithShowDate, setBookingsWithShowDate] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3002/foglalasok/getAllBookingsWithDate").then((response) => {
      if (response.data.error) {
        alert("errror");
      } else {
        setBookingsWithShowDate(response.data);
      }
    })
  }, [])
  return (
    <div className="container">
      <div>
        <div className="Title">
        <i class="searchIcon"><BiSearchAlt /></i>
        <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Keresés...."></input>
      </div>
    </div>
      <div className="jegyfoglalas-container">
      {bookingsWithShowDate
      .filter((value)=> {
        if(search === "") {
          return value;
        } else if(value.booking.username.toLowerCase().includes(search.toLowerCase())) {
          return value;
        }
      })
      .map((value, key) => {
        return <JegyfoglalasEgyenkent bookingsWithShowDate={value} key={key} />
      })}
      </div>
    </div>
  )
}

export default Jegyfoglalasok