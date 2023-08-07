import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} type="text" className="searchbar" placeholder="Keresés"></input>
    </>
  );
};

export default SearchBar;
