import React from "react";

function Szuro({ setSortBy, sortBy }) {
  const options = [
    { value: "popularity.desc", text: "Ismertség szerint ↓" },
    { value: "popularity.asc", text: "Ismertség szerint ↑" },
    { value: "release_date.desc", text: "Kiadás dátuma szerint ↓" },
    { value: "release_date.asc", text: "Kiadás dátuma szerint ↑" },
    { value: "vote_average.desc", text: "Értékelés szerint ↓"},
    { value: "vote_average.asc", text: "Értékelés szerint ↑"},
  ];

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <span className="rendezes">Rendezés</span>
      <select value={sortBy} onChange={handleChange}>
        {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
        ))}
      </select>
    </div>
  );
}

export default Szuro;
