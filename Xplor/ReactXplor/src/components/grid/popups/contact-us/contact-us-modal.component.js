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

                <h3>Contact Us
                  <span className="pull-right"><button type= "button" className ="close" onClick = {this.close} > &times;</button></span>
                </h3>
              </div>
            </div>
            <div className='container-fluid'>
            <div className='well well-lg'>
            <form className='form-horizontal'>
                  <fieldset>
                      <legend className="contactLegend">Contact Us</legend>
                      <div className='form-group'>
                          <label className='col-sm-3 control-label'>Name</label>
                          <div className='col-sm-9 col-md-6'>
                              <input className='form-control' type='text' />
                          </div>
                      </div>
                      <div className='form-group'>
                          <label className='col-sm-3 control-label'>Email</label>
                          <div className='col-sm-9 col-md-6'>
                              <input className='form-control' type='email' />
                          </div>
                      </div>
                      <div className='form-group'>
                          <label className='col-sm-3 control-label'>Mobile</label>
                          <div className='col-sm-9 col-md-6'>
                              <input className='form-control' type='mobile' />
                          </div>
                      </div>
                      <div className='form-group'>
                          <label className='col-sm-3 control-label'>Comments</label>
                          <div className='col-sm-9 col-md-6'>
                              <textarea className='form-control commentsArea' rows='5'></textarea>
                          </div>
                      </div>
                  </fieldset>
              </form>
              </div></div>
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
