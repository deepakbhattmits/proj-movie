import React, { Component } from 'react';
import NavigationComponent from '../components/NavigationComponent';

class Header extends Component {
    render() {
        
        return (
           
                <div className='ui row'>
                    <NavigationComponent />
                </div>
              
           
        )
    }
};
export default Header;
