import axios from "axios";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

export const getMovies = (search, page) => dispatch => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${search}&page=${page}`)
    .then(response => response.data)
    .then(data => {
      dispatch({ type: GET_MOVIES, payload: {data,search,page}});
    })
    .catch(e => console.log(e));
};

export const getMovieDetail =(imdbID)=>dispatch=>{
    return axios.get(`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${imdbID}`)
      .then((response) => response.data)
      .then((detail) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: detail });
      });
}

export function addMovieFavorite(Title, imdbID, Poster) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: {Title,imdbID,Poster}
  };
}

export function removeMovieFavorite(imdbID) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: {imdbID}
  };
}
