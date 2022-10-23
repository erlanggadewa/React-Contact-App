import PropTypes from "prop-types";
import React from "react";

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari Berdasarkan Nama"
      value={keyword}
      onChange={(event) => {
        keywordChange(event.target.value);
      }}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
