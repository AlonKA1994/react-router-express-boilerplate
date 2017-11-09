const express    = require('express');
const LogModel   = require("../models/LogModel")

let arrAllLogs = [];
let tmp = new LogModel({name: "Hello",
                        path: "world!"});
arrAllLogs.push(tmp.data);

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!'});
});

// on routes that end in /logs
// ----------------------------------------------------
router.route('/logs')
    // get all the logs (accessed at GET http://localhost:8080/api/logs)
    .get((req,res) => {
        res.json(arrAllLogs);
    })
    // create a log (accessed at POST http://localhost:8080/api/logs)
    .post((req,res) =>{
        let tmpLog = new LogModel({});
        tmpLog.set("name", req.body.name);
        tmpLog.set("path", req.body.path);
        arrAllLogs.push(tmpLog.data);

        res.json({message: "New log was added"});
    });

// on routes that end in /logs/:log_id
// ----------------------------------------------------
router.route('/logs/:log_id')

    // get the log with that id (accessed at GET http://localhost:8080/api/logs/:log_id)
    .get((req, res) => {
        let result = arrAllLogs.filter((log)=> log.id == req.params.log_id);

        res.json(result);
    })
    // update the log with this id (accessed at PUT http://localhost:8080/api/logs/:log_id)
    .put((req, res) => {
        arrAllLogs = arrAllLogs.map((log) => {
            if (log.id == req.params.log_id) {
                log.name = req.body.name;
                log.path = req.body.path;
            }
            return log;
        });

        res.json({message: "Log was updated"});
    })
    // delete the log with this id (accessed at DELETE http://localhost:8080/api/logs/:log_id)
    .delete((req,res) => {
        arrAllLogs = arrAllLogs.filter((log) => log.id != req.params.log_id);

        res.json({message: "Log was deleted"});
    });



module.exports = router;