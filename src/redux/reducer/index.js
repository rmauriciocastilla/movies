import { GET_MOVIES,GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FOVOURITE } from "../actions";

const initialState = {
    moviesFavourites: [],
    response: {},
    movieDetail: {}
  };

export default function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_MOVIES:
            return {
                ...state,
                response: action.payload
              };

        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
            }

        case ADD_MOVIE_FAVORITE:
            if(state.moviesFavourites.find(movie => movie.id == action.id) == undefined){
                return{
                    ...state,
                    moviesFavourites: state.moviesFavourites.concat({title: action.payloadTitle, id: action.id})
                }
            }
            return {...state}
            

        case REMOVE_MOVIE_FOVOURITE:
            return{
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.id!== action.id)
            }

        default:
            return {...state}

    }
} 
