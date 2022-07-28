import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieFavorite,removeMovieFavorite } from "../../redux/actions";

export default function Movie({Title,imdbID,Poster}){
    const dispatch=useDispatch();
    return(
        <div>

            <button onClick={document.URL=='http://localhost:3000/'?()=>dispatch(addMovieFavorite(Title,imdbID,Poster)):()=>dispatch(removeMovieFavorite(imdbID))}>{document.URL!=='http://localhost:3000/'?"X":"💖"}</button>
            <p>{Title}</p>
        <Link to={`/detail/${imdbID}`}id={imdbID}>
            <img src={Poster==="N/A"?"https://coacademy-server-jc.com/uploads/courses/images/890.jpg":Poster} alt={Title}/>
        </Link>
        </div>
    )
}
