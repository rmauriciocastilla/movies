import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import Pagination from "../Pagination/Pagination";
import './Movies.css';

export default function Movies() {
  let response = useSelector((state) => state.response);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (response.totalResults) {
      setMax(Math.ceil(response.totalResults / 10));
    }
  }, [response]);

  if (!response.Response) {
    return <div></div>;
  } else if (response.Response === "False") {
    return <div>{response.Error} Try Again</div>;
  } else {
    return (
      <div>
        <Pagination max={max} />
        <div className="container-movies">
          {response.Search.map((movie) => (
            <Movie
              key={movie.imdbID}
              Title={movie.Title}
              Poster={movie.Poster}
              imdbID={movie.imdbID}
            />
          ))}
        </div>
        <Pagination max={max} />
      </div>
    );
  }
}
