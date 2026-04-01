import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="api-search">
      <input
        className="api-search__input"
        value={query}
        onChange={handleChange}
        placeholder="Buscar una API (título o descripción)"
        aria-label="Buscar APIs"
      />
      <button className="api-search__button" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
