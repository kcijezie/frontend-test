/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import styles from './header.css.js';

var HeaderContainer = React.createClass({

    render: function() {
        return (
            <nav style={styles.bgColor} className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="" style={styles.textColor}>Product</a></li>
                            <li><a href="" style={styles.textColor}>About</a></li>
                            <li><a href="" style={styles.textColor}>Portfolio</a></li>
                            <li><a href="" style={styles.textColor}>Team</a></li>
                            <li><a href="" style={styles.textColor}>Contact</a></li>
                        </ul>

                        <form className="navbar-form navbar-right">
                            <button type="submit" style={styles.button} className="btn btn-success">
                                <span style={styles.buttonIcon} className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                                Menu
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
});


module.exports =  HeaderContainer;