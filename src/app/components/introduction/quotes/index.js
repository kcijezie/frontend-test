/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import styles from './quotes.css.js';

var QuotesSection = React.createClass({

    render: function() {
        return (
            <div style={styles.quote} className="well">
                <h3 style={styles.h3}>
                    Fantastic service,
                    i'm exited!
                </h3>
                <p style={styles.p}>Pellentesque kcporttitor urna a nisi
                    sodales, ac condimentum mauris
                    auctor. In efficitur velit ut eros
                    porttitor eleifend. In tempor diam
                    at urna finibus, vitae lobortis sem
                    tincidunt.</p>
                <p>
                    <strong className="show">James Counter</strong>
                    <span style={styles.textColor} className="show">Citizens Advice</span>
                    <span style={styles.textColor} className="show">Lead Front End UX Developer</span>
                </p>
            </div>
        );
    }
});


module.exports =  QuotesSection;