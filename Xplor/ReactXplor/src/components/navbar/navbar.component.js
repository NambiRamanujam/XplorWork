import React , {Component,PropTypes} from 'react';

import './navbar.component.scss';

class NavbarComponent extends Component {
  render() {
    return(
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <img src="../../../assets/images/Xplor/adds/logo.png" alt="" className="logo" />
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="tel:+918041152358" target="_blank">
                            <i className="glyphicon glyphicon-earphone"> <b>91 – 8880380383</b> </i>
                        </a>
                    </li>
                    <li>
                        <a className="page-scroll" href="mailto:info@xplor.co.in" target="_blank">
                            <i className="glyphicon glyphicon-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a className="page-scroll" href="https://www.facebook.com/XplorWorldwide" target="_blank">
                            <i className="social social-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="page-scroll" href="https://twitter.com/xplorblr" target="_blank">
                            <i className="social social-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="page-scroll" href="https://in.linkedin.com/pub/xplor-worldwide/ab/773/7b2" target="_blank">
                            <i className="social social-linked-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
