import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from '../helpers/history';
import Header from '../containers/Header';
import MainPage from '../containers/MainPage';

class ReactRouter extends Component {
    render() {
        return (
          <div className='ui container'>
                
                <Router history={ createBrowserHistory }>
                        <Header />
                      <div className='ui row'>
                        
                       
                        <Switch>
                            <Route exact path='/' component={ MainPage } />
                            <Route exact path='/home' component={ MainPage } />
                        </Switch>
                    
                    
                    
                        </div>
                </Router>
        </div>
        );
    }
};
export default ReactRouter;
