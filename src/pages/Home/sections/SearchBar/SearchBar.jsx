import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = () => {
    setQuery(e.target.value);
  };

  return (
    <form className="api-search">
      <input
        className="api-search__input"
        value={query}
        onChange={handleChange}
        placeholder="Buscar una API (titulo o descripcion)"
        aria-label="Buscar APIs"
      />
      <button className="api-search__button" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
