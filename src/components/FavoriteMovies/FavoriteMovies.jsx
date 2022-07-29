import React from "react";
import Movie from "../Movie/Movie";
import { useDispatch, useSelector } from "react-redux";


export default function FavoriteMovies(){
    const dispatch = useDispatch();
    let moviesFavorites = useSelector(state=>state.moviesFavorites);

    return(
        <div className="container-movies">{!moviesFavorites.length?"No tengo":moviesFavorites.map(movie=>(
            <Movie
            Title={movie.Title}
            imdbID={movie.imdbID}
            Poster={movie.Poster}
            />
        ))}</div>
    )

}