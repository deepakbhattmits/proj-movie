import { combineReducers } from 'redux';
import { getMovie } from '../reducers';

export const store = combineReducers({
    movieData: getMovie,
})