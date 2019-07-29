import { movieConstants } from '../constants';
const initialState = {
    movies : {},
    relatedMovies : {},
    addFMovies: {},
}
export const getMovie = ( state ={ initialState }, action ) => {

    switch ( action.type ) {
        case movieConstants.GET_MOVIE: 
        return Object.assign({}, state, { movies: action.payload });
        
        case movieConstants.GET_RELATED_MOVIE:
            return Object.assign({},state, { relatedMovies: action.payload });

        case movieConstants.ADD_FAVORITE:
            if(( state === undefined && state === '' && state.some((el) => el === action.payload) )) {
                return state;
            } else {
                localStorage.setItem('movieData',(state.movies.id === parseInt(action.payload) ? JSON.stringify(state.movies) : '' ) );
                return Object.assign({},state, { addFMovies: {...state.addFMovies, [action.payload.id]: action.payload } });
            }     
        case movieConstants.REMOVE_FAVORITE:
                localStorage.removeItem('movieData');
                return Object.assign({},state, {addFMovies: {} });
        default: 
            return state ;
    }
}