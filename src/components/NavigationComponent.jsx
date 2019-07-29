import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ( props ) =>  {
    
    return (     


<div className="ui secondary  menu">

    <div className='item'>
        <NavLink className='header text-capitalize' to='/'>
        Trakinvest
        </NavLink>
    </div>
 
    <div className="right menu">
        <div className="item">
            <NavLink className='text-uppercase' to='/home'> home</NavLink>
        </div>
        </div>
    </div>

    )
};
export default Navigation;
