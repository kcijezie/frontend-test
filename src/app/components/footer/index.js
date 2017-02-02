/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import styles from './footer.css.js';

var FooterSection = React.createClass({

    render: function() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <p>
                                <img src="images/Basement_logo_Small.png" />
                                <span style={styles.logo}>
                                    Basement
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h4 style={styles.h4}>Product</h4>
                            <ul className="list-unstyled">
                                <li><a href="" style={styles.a}>Features</a></li>
                                <li><a href="" style={styles.a}>Promo</a></li>
                                <li><a href="" style={styles.a}>Download</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4 style={styles.h4}>Contact</h4>
                            <ul className="list-unstyled">
                                <li><a href="" style={styles.a}>Find Us</a></li>
                                <li><a href="" style={styles.a}>FAQ</a></li>
                                <li><a href="" style={styles.a}>Help</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4 style={styles.h4}>Follow us</h4>
                            <ul className="list-inline">
                                <li><a href=""><img src="images/Facebook_Icon.png" /></a></li>
                                <li><a href=""><img src="images/Twitter_Icon .png" /></a></li>
                                <li><a href=""><img src="images/Dribbble_Icon.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});


module.exports =  FooterSection;