import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MainComponent from '../components/MainComponent';
import RelatedComponent from '../components/RelatedComponent';
import { getMovies, getRelatedMovies, addTofavorites, removeFromfavorites } from '../actions';
class MainPage extends Component {
    state= { 
        className: {  },
     }
    
    componentDidMount () {
        this.props.getMovies(); // action 
        this.props.getRelatedMovies();// action 
    }
    handleClick = ( e ) => {
        
    }
    addToFavorite = ( e ) => { 
        this.props.addTofavorites(e.target.id);

        this.setState({ className: {...this.state.className, [e.target.id]: true} }); 
        if( this.state.className[e.target.id] ) {

            this.setState({ className: {...this.state.className, [e.target.id]: false} });
           
            this.props.removeFromfavorites ( this.state.className );

        } 
    }
   
        
    render() {
        return (
            <Fragment>
          
                    <MainComponent 
                        movies={ this.props.movies }
                        addToFavorite= { this.addToFavorite }
                        className={ this.state.className }
                    />
           
          
                    <h3>Related Videos</h3>
                 
                    <RelatedComponent 
                        relatedMovies = { this.props.relatedMovies }
                        handleClick= { this.handleClick }
                    />
          
            </Fragment>
        )
    }
};
const mapDispatchToProps = ( dispatch ) => ({
    getMovies : ( ) => dispatch( getMovies( ) ),
    getRelatedMovies : ( ) => dispatch( getRelatedMovies( ) ), 
    addTofavorites: ( data ) => dispatch( addTofavorites( data ) ),
    removeFromfavorites: ( data ) => dispatch( removeFromfavorites( data ) ),
});
const mapStateToProps = ( state ) => {
    return {
        movies: state.movieData.movies,
        relatedMovies: state.movieData.relatedMovies,
        fMovies: state.movieData.addFmovies,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
