import React from "react";

const SearchBar = ({setSearch}) => {
  return (
    <div className="search">
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Keresés" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;
