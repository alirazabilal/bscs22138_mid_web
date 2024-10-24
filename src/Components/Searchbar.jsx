import React, { useState } from "react";
import { useContext } from "react";
// import titleContext from "./Context/Context";

const Searchbar = ({ onSearch }) => {
  //   const { title } = useContext(titleContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        className="searching"
        type="text"
        placeholder="movie..."
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <h2>{title}</h2> */}
      <br />
    </div>
  );
};
export default Searchbar;
