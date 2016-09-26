import React , {Component,PropTypes} from 'react';

import './footer.component.scss';

class FooterComponent extends Component {
  render() {
    return(
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <h3 className="text-left">About</h3>
              <p className="text-justify">Xplor Honeymoon is part of the Xplor Group of Companies. The Company was established in October, 2010 as a 360° travel management company to provide its clients with end-to-end travel services for India and across the world.</p>
            </div>
            <div className="col-xs-12 col-md-4 text-left">
              <h3>Follow</h3>
              <div className="social">
                  <a href="https://twitter.com/xplorblr" className="bigLogo" target="_blank"><i className="social social-twitter"></i></a>
                  <a href="https://www.facebook.com/XplorWorldwide" className="bigLogo" target="_blank"><i className="social social-facebook"></i></a></div>
            </div>
            <div className="col-xs-12 col-md-4 text-left">
              <h3 className="text-left">Contact US</h3>
              <div className="clearfix">&nbsp;</div>
              <p>
                  XPLOR WORLDWIDE [P] LTD <br/>
                  No 211/1, 2nd floor,Next to Canara Bank <br/>
                  New BEL Road Bangalore – 560094 <br/>
                  Phone : 080-41152358 <br/>
                  Toll Free No : 91 – 8880380383
              </p>

              <h3 className="text-left">Connect</h3>
              <button className="btn btn-lg btn-danger" ng-click="contactUs()">Get in Touch</button><span>&nbsp;&nbsp;&nbsp;</span>

            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
                <a href="http://xplorhoneymoon.co.in/#" className="sp-effect3">
                  <img src="../../../assets/images/Xplor/adds/logo.png" alt="" className="logo" />
                </a>
                <div className="rights">
                  <p>Copyright © 2015 XPLOR Travels Pvt. Ltd.</p>
                </div>
            </div>

            <div className="col-xs-12 col-md-2" >
            </div>
            <div className="col-xs-12 col-md-2" >
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
