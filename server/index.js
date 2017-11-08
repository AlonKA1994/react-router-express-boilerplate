'use strict';

// Call the needed packages
let express    = require('express');        // call express
let bodyParser = require('body-parser');
// Loading routes
let appRoute   = require('./routes/appRoute');
let apiRoute   = require('./routes/apiRoute');

let app = express();

// configure build to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api/log
app.use('/api/', apiRoute);
app.use('/', appRoute);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);