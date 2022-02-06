import React from "react"
import ReactDom from 'react-dom'

import App from './App'
import './index.css'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {reducers} from './reducers'
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
