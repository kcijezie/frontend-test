/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import styles from './content-push.css.js';

var ContentPushSection = React.createClass({

    render: function() {
        return (
            <div style={styles.bgColor} className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <p style={styles.textTransform}>Nam elementum rutrum ipsum sit amet luctus. Sed libero turpis, eleifend
                                in quam sed, vestibulum vulputate ante.</p>
                        </div>
                        <div className="col-lg-2">
                            <p><a style={styles.button} className="btn btn-primary btn-lg" href="#" role="button">More Info</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports =  ContentPushSection;