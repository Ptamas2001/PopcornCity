import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
function SearchBar({setSearch}) {
  return (
    <div>
        <div className="Title">
        <i class="searchIcon"><BiSearchAlt /></i>
        <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Keresés a filmek között"></input>
      </div>
    </div>
  )
}

export default SearchBar