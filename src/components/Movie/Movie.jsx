import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieFavorite, removeMovieFavorite } from "../../redux/actions";
import "./Movie.css";

export default function Movie({ Title, imdbID, Poster }) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="movie-container">
        <div className="image-container">
          <img
            src={
              Poster === "N/A"
                ? "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
                : Poster
            }
            alt={Title}
          />
        </div>
        <div className="movie-commands">
          <button
            className="movie-commands-button"
            onClick={
              document.URL == "http://localhost:3000/"
                ? () => dispatch(addMovieFavorite(Title, imdbID, Poster))
                : () => dispatch(removeMovieFavorite(imdbID))
            }
          >
            {document.URL !== "http://localhost:3000/" ? (
              <i class="fa-solid fa-x"></i>
            ) : (
              <i class="fa-solid fa-heart"></i>
            )}
          </button>
          <Link className="movie-commands-link" to={`/detail/${imdbID}`} id={imdbID}>
            <i class="fa-solid fa-circle-info"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
