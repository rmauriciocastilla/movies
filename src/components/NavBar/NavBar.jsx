import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div>
            <Link to="/home">HOME</Link>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <Link to="/favorites">Favorites</Link>
        </div>
    )
}