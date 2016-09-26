import React , {Component,PropTypes} from 'react';

import './header.component.scss';

class HeaderComponent extends Component {
  render() {
    return(
      <div className="header">
          <div className="header-content">
            <div className="header-content-inner">
                <h2>EXPLORE &amp; BOOK THE BEST HONEYMOON PACKAGES NOW!</h2>
                <hr />
                <p>Finding the perfect honeymoon for you has never been this easy.<br/>Book your domestic or international honeymoon with xplorhoneymoon.co.in and save !</p>
            </div>
          </div>
      </div>
    );
  }
}

export default HeaderComponent;
