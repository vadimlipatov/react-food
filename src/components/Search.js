import React, { useState } from "react";

const Search = ({ cb }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search"
          type="search"
          placeholder="Search by catalog"
          className="validate"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={handleSubmit} className="btn right search-btn">
          Search
        </button>
        {/* <label for="search">Search</label> */}
      </div>
    </div>
  );
};

export default Search;
