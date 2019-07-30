import React from 'react';
import Slider from "react-slick";
const RelatedComponent = ( props ) => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
        beforeChange: function(currentSlide, nextSlide) {
       
        },
        afterChange: function(currentSlide) {
        }
      };
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const renderRelated = ( ) => {
        if( props.relatedMovies === undefined ) {
            return <div>Loading...</div>;
        }
        return props.relatedMovies.results.map( (el,i) => {
            return (                  
                <div className="main"  key={ i } >
                    <div id={ el.id } className="card" onClick={ props.handleClick }>
                        <div className="ui image">
                                <img className='' src={ `${imgUrl}${el.poster_path}` } alt='img' style={{width: 200,height: 200}}/>
                            </div>
                            <div className="content">
                                <div className="ui header custom-header" title={ el.original_title }>{ el.original_title }</div>
                                </div>
                            <div className="">
                                <button className="ui button">Play</button>
                            </div>
                        
                    </div>
                </div>
                );
                });
    }
    return (
            <Slider {...settings}>
               { renderRelated() }
            </Slider>
        
    )
};
export default RelatedComponent

