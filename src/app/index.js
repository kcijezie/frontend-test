'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var BasementLayout= require('./components/main-container/');

//Load react app with BasementLayout
ReactDOM.render(
<BasementLayout />,
    document.getElementById('app-container')
);

