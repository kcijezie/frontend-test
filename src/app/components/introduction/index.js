/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var QuotesSection = require('./quotes/');
var DescriptionSection = require('./description/');
import styles from './introduction.css.js';

var IntroductionSection = React.createClass({

    render: function() {
        return (
            <div className="container">
                <div style={styles.border} className="page-header text-center">
                    <h2 style={styles.h2}>Etiam nisl dui, ultricies quis turpis quis, dapibus finibus tortor</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <QuotesSection />
                    </div>
                    <div className="col-lg-8">
                        <DescriptionSection />
                    </div>

                </div>
            </div>
        );
    }
});


module.exports =  IntroductionSection;