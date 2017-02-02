/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import styles from './carousel.css.js';

var CarouselContainer = React.createClass({

    render: function() {
        return (
            <div style={styles.bgColor} className="jumbotron">
                <div style={styles.padding} className="container text-center">
                    <h1 style={styles.textTransform}><img src="images/Basement_Logo.png" /> Basement</h1>
                </div>
            </div>
        );
    }
});


module.exports =  CarouselContainer;
