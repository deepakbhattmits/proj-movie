import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { store } from './helpers';
import ReactRouter from './router/ReactRouter';
import './assets/css/style.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store1 = createStore(
    store,
    composeEnhancers( applyMiddleware( reduxThunk ) ),
    );
    ReactDOM.render(
        <Provider store = { store1 }> 
            <ReactRouter />
        </Provider>,
        document.querySelector('#root')
    )