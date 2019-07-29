import React,{ Fragment } from 'react';

const MainComponent = ( props ) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300';
    const imgUrl1 = 'https://image.tmdb.org/t/p/w400';
    if(props.movies === undefined ) {
        return <div>Loading...</div>
    }
    return (
        <Fragment>
        <div className="ui four column grid custom-section-2" id={ props.movies.id }>
            <div className="column custom-width">
                <div className="image">
                    <img src={ `${imgUrl}${props.movies.backdrop_path}` } alt='backdrop-img' />
                </div>
            </div> 
            <div className="column custom">
                <div className="ui list">
                    <div className="item">
                        <div className="header custom-header">
                            <h3>{ props.movies.original_title }</h3>
                            <i id={ props.movies.id } className={`custom-star star icon ${ ( props.fMovies && props.fMovies[props.movies.id] ) || props.className[props.movies.id] ? 'green': '' }`} onClick={ props.addToFavorite} title={`${ ( props.fMovies && props.fMovies[props.movies.id] ) || props.className[props.movies.id] ? 'Mark Unfavorite': 'Mark Favorite'}`}></i>
                        </div>
                        <button className="ui button"> Play </button>
                        <button className="ui button"> Watch Later </button>
                        <button className="ui button"> Share </button>
                    </div>
             </div>
            </div>
            </div>
            <div className="ui divider"></div>
            <div className="ui two column grid" id={ props.movies.id }>
                <div className='column'> 
                    <p>{ props.movies.overview }</p>
                </div>
                <div className='column'>
                    <div className="image">
                        <img src={ `${imgUrl1}${props.movies.backdrop_path}` } alt='backdrop-img' />
                    </div>
                </div>
            </div>
        </Fragment>

    );
};
export default MainComponent;
