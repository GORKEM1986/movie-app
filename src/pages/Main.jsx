import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContextProvider";

const Main = () => {
  const API_KEY = "f6be9576b7d8ec98ba4b7ddfbed1c164";

  const [movies, setMovies] = useState([]);
  const [seacrhTherm, setSeacrhTherm] = useState("");
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  const { MyUser } = useContext(AuthContext);

  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false`;

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=${seacrhTherm}`;

  console.log(seacrhTherm)

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    !seacrhTherm ? 
    getMovies(FEATURED_API) :
    getMovies(SEARCH_API)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
      getMovies(SEARCH_API );

  };
  
console.log(movies)

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <input
          type="search"
          className="search-input"
          onChange={(e) => setSeacrhTherm(e.target.value)}
          placeholder="Search a movie..."
          value={seacrhTherm} 
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex flex-wrap  text-danger justify-content-center">Film Series</div>
      <div className="d-flex justify-center flex-wrap ">
        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
