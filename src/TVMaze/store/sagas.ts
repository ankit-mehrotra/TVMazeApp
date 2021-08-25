import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { moviesFetchSuccess,movieFetchFailure,FETCH_MOVIE_LIST } from './actions/MovieTvAction';
import { ShowDetails } from './types';

const fetchData = (search: string): Promise<ShowDetails[] >  => {
    return axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
 }

function* fetchMovieList(action: { type: typeof FETCH_MOVIE_LIST , payload: string}){
    try{
        const { data } = yield call(fetchData, action.payload);
        yield put(moviesFetchSuccess(data));
    }catch(err){
        yield put(movieFetchFailure());
    }
}

function* fetchMovieSaga(){
  yield takeLatest(FETCH_MOVIE_LIST, fetchMovieList)
}

export default fetchMovieSaga;