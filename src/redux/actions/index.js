import axios from "axios";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FOVOURITE = "REMOVE_MOVIE_FOVOURITE";

export const getMovies = (search, page) => dispatch => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${search}&page=${page}`)
    .then(response => response.data)
    .then(data => {
      dispatch({ type: GET_MOVIES, payload: data });
    })
    .catch(e => console.log(e));
};

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
}

export function addMovieFavourite(title, id) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payloadTitle: title,
    id,
  };
}

export function removeMovieFavourite(id) {
  return {
    type: REMOVE_MOVIE_FOVOURITE,
    id,
  };
}
