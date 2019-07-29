import { movieConstants } from '../constants';
import api from '../helpers/api';

export const getMovies = () => async ( dispatch ) => {
    const response =  await api.get(`/movie/299534`);
    dispatch({type: movieConstants.GET_MOVIE, payload: response.data });
}
export const getRelatedMovies = ( ) => async ( dispatch ) => {
    const response = await api.get(`/movie/299534/related`);
    dispatch({ type: movieConstants.GET_RELATED_MOVIE, payload: response.data });
}
export const addTofavorites = ( selectedMovieId ) => ( dispatch ) => {
    dispatch({type: movieConstants.ADD_FAVORITE, payload: selectedMovieId});
}
export const removeFromfavorites = ( wantRemoveId ) => (dispatch) => {
    dispatch({type: movieConstants.REMOVE_FAVORITE, payload: wantRemoveId});
}
