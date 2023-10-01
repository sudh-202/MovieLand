import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=9a37461c";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const serachMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    serachMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) =>  setSearchTerm(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => serachMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies to show</h2>
        </div>
      )}
    </div>
  );
};

export default App;
