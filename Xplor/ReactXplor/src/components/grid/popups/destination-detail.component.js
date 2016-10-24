import React , {Component,PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import TabPanel from 'react-tab-panel';

class DestinationDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  close() {
    this.props.closeCallBack();
  }
  render() {
    return (
      <div className="table">
        <div className="row">
            <Modal show={this.props.show} onHide={this.close} className="destinationModal">
            <Modal.Header className="modalHeader">
              <div className="row">
                <div className = "col-md-12 col-sm-12 col-xs-12">
                  <button type= "button" className ="close pull-right" onClick = {this.close} > &times;</button>
                  <h3>{this.props.cityName}</h3>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
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
                <div tabTitle="Accodomation">
                  <h2>Accodomation</h2>
                </div>
              </TabPanel>

            </Modal.Body>
            <Modal.Footer className="modalFooter">
              <button className="btn btn-primary" onClick={this.close}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

DestinationDetailComponent.propTypes = {
  show: PropTypes.bool,
  closeCallBack: PropTypes.func
};

export default DestinationDetailComponent;
