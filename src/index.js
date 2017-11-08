// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Routes from './routes';

import './index.css';

const browserHistory = createBrowserHistory();

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);