import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from "./Redux/centralStore";
import { App } from './App';
import './index.css';

render((
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>
), document.getElementById('root'));
