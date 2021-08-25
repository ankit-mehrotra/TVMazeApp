import { combineReducers } from 'redux';
import { movieTvReducer } from './movieTvReducer';
import TableItemReducer from './tableItemReducer';

const rootReducer = combineReducers({
    movieTvList: movieTvReducer,
    tableList: TableItemReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;