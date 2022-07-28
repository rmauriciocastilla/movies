import { GET_MOVIES,GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions";

const initialState = {
    moviesFavorites: [],
    response: {},
    movieDetail: {},
    search: "",
    page: 1
  };

export default function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_MOVIES:
            if(action.payload.search===state.search){
                return {
                    ...state,
                    response: action.payload.data,
                    page: action.payload.page
                  };
            }
            else{
                return {
                    ...state,
                    response: action.payload.data,
                    search: action.payload.search,
                    page: 1
                  };
            }

        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
            }

        case ADD_MOVIE_FAVORITE:
            if(!state.moviesFavorites.find(movie => movie.imdbID == action.payload.imdbID)){
                return{
                    ...state,
                    moviesFavorites: state.moviesFavorites.concat(action.payload)
                }
            }
            return {...state}
            

        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.imdbID!== action.payload.imdbID)
            }

        default:
            return {...state}

    }
} 
