/**
 * Created by kenei on 08/08/2016.
 */
// Simple Node/Express App to serve up index.html

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var moment = require('moment');

moment.locale('en-UK');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));

// Set ip and port #
var _ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var _port      = process.env.PORT || 3000;

if (typeof _ipaddress === "undefined") {
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    _ipaddress = "127.0.0.1";
};

app.get('*', express.static(__dirname + '/dist/index.html'));

// listen (start app with node server.js)
app.listen(_port);
console.log('app listening on port ' + _port);


