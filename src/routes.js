// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <Route path="/app" component={App} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
        </div>
    </Router>
);

export default Routes;