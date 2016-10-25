import React , {Component,PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {reduxForm} from 'redux-form';

class ContactUsComponent extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  close() {
    this.props.closeCallBack();
  }

  render() {
    const {fields:{email, mobile}} = this.props;
    return (
      <div className="table">
        <div className="row">
            <Modal show={this.props.show} onHide={this.close} className="contactModal">
            <Modal.Body className="contactBody">
            <div className="row modalHeader">
              <div className = "col-md-12 col-sm-12 col-xs-12">
                <button type= "button" className ="close pull-right" onClick = {this.close} > &times;</button>
                <h3>Contact Us</h3>
              </div>
            </div>
              <form>
                <input type="text" placeholder="Your email" {...email} />
                <input type="text" placeholder="Your mobile(Optional)" {...mobile} />
              </form>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 buttons">
                <button className="btn btn-primary pull-right">Submit</button>
                <button className="btn btn-primary pull-right" onClick={this.close}>Close</button>
              </div>
            </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

ContactUsComponent.propTypes = {
  show: PropTypes.bool,
  closeCallBack: PropTypes.func,
  fields: PropTypes.object.isRequired,
};

export default reduxForm({
  form:'contactUsForm',
  fields: ['email', 'mobile']
})(ContactUsComponent);
