import React , {Component,PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import TabPanel from 'react-tab-panel';

class DestinationDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.contactUs = this.contactUs.bind(this);
  }
  close() {
    this.props.closeCallBack();
  }
  contactUs() {
    this.props.contactCallback();
  }
  render() {
    return (
      <div className="table">
        <div className="row">
            <Modal show={this.props.show} onHide={this.close} className="destinationModal">
              <Modal.Body className="destinationBody">
                <div className="row modalHeader">
                  <div className = "col-md-12 col-sm-12 col-xs-12">

                    <h3>{this.props.cityName}
                      <span className="pull-right"><button type= "button" className ="close" onClick = {this.close} > &times;</button></span>
                    </h3>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 detailTabs">
                      <TabPanel tabPosition="top" tabAlign="stretch">
                        <div tabTitle="Pricing & Dates">
                          <h2>Pricing & Dates</h2>
                        </div>
                        <div tabTitle="Itinerary">
                          <h2>Itinerary</h2>
                        </div>
                        <div tabTitle="Inclusions">
                          <h2>Inclusions</h2>
                        </div>
                        <div tabTitle="Accomodation">
                          <h2>Accomodation</h2>
                        </div>
                      </TabPanel>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12 buttons">
                    <button className="btn btn-primary pull-right" onClick={this.contactUs}>Contact Us</button>
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

DestinationDetailComponent.propTypes = {
  show: PropTypes.bool,
  closeCallBack: PropTypes.func,
  contactCallback: PropTypes.func
};

export default DestinationDetailComponent;
