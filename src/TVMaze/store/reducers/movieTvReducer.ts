import { movieTvList } from '../types';
import { ActionTypes,FETCH_MOVIE_LIST,SUCCESS_MOVIE_LIST,FAILED_MOVIE_LIST } from '../actions/MovieTvAction';

const initialState: movieTvList = {
    loading: false,
    error: "",
    list: []
}
export const movieTvReducer = (state: movieTvList = initialState, action: ActionTypes ): movieTvList =>{
  switch(action.type){
    case FETCH_MOVIE_LIST:
        return {
            ...state,
            loading: true,
            error: ""
        }
    case SUCCESS_MOVIE_LIST: 
      return {
          ...state,
          list: action.payload,
          error: "",
          loading: false
      }
    
    case FAILED_MOVIE_LIST:
        return {
            ...state,
            list: [],
            loading: false,
            error: "An error Occurred while processing your request"
        }
    default:
        return state
  }
  
}