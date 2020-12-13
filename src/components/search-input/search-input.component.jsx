import React from "react";

import Utils from "../../utils";

import "./search-input.styles.css";

const SearchInput = ({ handleChange, placeholder }) => {
  const handleChangeHoldoff = Utils.fcHoldoff(handleChange, 1000);
  return (
    <div className="SearchInputContainer">
      <div>
        <input
          className="SearchInput"
          type="search"
          placeholder={placeholder || ""}
          onChange={handleChangeHoldoff}
        />
      </div>
    </div>
  );
};

export default SearchInput;
