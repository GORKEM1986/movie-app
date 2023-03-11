import React, { useContext } from "react";
import { autContext } from "../context/AuthContextProvider";

const Main = () => {
  return (
    <>
      <form className="search">
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value="searchTerm"
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex flex-wrap justify-content-center">card</div>
    </>
  );
};

export default Main;
