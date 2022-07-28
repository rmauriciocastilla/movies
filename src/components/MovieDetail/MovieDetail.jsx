import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMovieDetail } from "../../redux/actions";

export default function MovieDetail(){
    const dispatch = useDispatch();
    let movieDetail = useSelector(state=>state.movieDetail);
    let {id} = useParams();

    useEffect(()=>{
        dispatch(getMovieDetail(id))
    },[])

    if(!movieDetail.Response){
        return(
            <div>Loading</div>
        )
    }
    else if(movieDetail.Response === "False"){
        return(
            <div>
                <Link to="/">BACK</Link>
                <div>{movieDetail.Error}</div>
            </div>
        )
    }else{
        return(
            <div>
            <Link to="/">BACK</Link>
            <div>{movieDetail.Title}</div>
            </div>
        )
    }
}