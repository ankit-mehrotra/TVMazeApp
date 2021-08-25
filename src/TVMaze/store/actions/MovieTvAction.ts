import { ShowDetails } from '../types';

export const FETCH_MOVIE_LIST = '@MOVIE_APP/FETCH_MOVIE_TV_LIST';
export const SUCCESS_MOVIE_LIST = '@MOVIE_APP/SUCCESS_MOVIE_TV_LIST';
export const FAILED_MOVIE_LIST = '@MOVIE_APP/FAILED_MOVIE_TV_LIST'

export type ActionTypes = 
| { type: typeof FETCH_MOVIE_LIST, payload : string} 
| {type: typeof SUCCESS_MOVIE_LIST, payload: ShowDetails[] }
| {type: typeof FAILED_MOVIE_LIST}

export const fetchMovies = (payload: string): ActionTypes => ({
    type: FETCH_MOVIE_LIST,
    payload
});

export const moviesFetchSuccess = (payload: ShowDetails[]): ActionTypes => ({
   type: SUCCESS_MOVIE_LIST,
   payload
})

export const movieFetchFailure = (): ActionTypes => ({
    type: FAILED_MOVIE_LIST,
})