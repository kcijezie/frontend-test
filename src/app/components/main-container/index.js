/**
 * Created by kenei on 01/02/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var HeaderBar= require('../header/');
var CarouselSection= require('../carousel/');
var ContentPushSection= require('../content-push/');
var IntroductionSection= require('../introduction/');
var FooterSection= require('../footer/');

var MainContainer = React.createClass({
    render: function() {
        return (
            <div>
                <HeaderBar />
                <CarouselSection />
                <ContentPushSection />
                <IntroductionSection />
                <FooterSection />
            </div>
        );
    }
});


module.exports =  MainContainer;