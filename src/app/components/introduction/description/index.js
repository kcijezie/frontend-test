/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import styles from './description.css.js';

var DescriptionSection = React.createClass({

    render: function() {
        return (
            <div style={styles.div}>
                <h3 style={styles.h3} >Ut sit amet scelerisque ex, sit amet mattis
                    sapienkc</h3>
                <p style={styles.p}>
                    Mauris eu finibus diam. Quisque accumsan aliquet dictum.
                    Aenean interdum tortor vitae elit elementum, et interdum
                    tortor imperdiet. Duis sed justo ultrices, aliquam nisi sit
                    amet, interdum justo.</p>
                <p style={styles.p}>
                    Mauris eu finibus diam. Quisque accumsan aliquet dictum.
                    Aenean interdum tortor vitae elit elementum, et interdum
                    tortor imperdiet. Duis sed justo ultrices, aliquam nisi sit
                    amet, interdum justo.
                </p>
                <h3 style={styles.h3}>
                    Ut sit amet scelerisque ex, sit amet mattis
                    sapien. Proin convallis libero porta, mattis
                    quam vitae
                </h3>
                <p style={styles.p}>
                    Pellentesque porttitor urna a nisi sodales, ac condimentum
                    mauris auctor. In efficitur velit ut eros porttitor eleifend. In
                    tempor diam at urna finibus, vitae lobortis sem tincidunt.
                    Donec ac elementum orci.
                </p>
            </div>
        );
    }
});


module.exports =  DescriptionSection;