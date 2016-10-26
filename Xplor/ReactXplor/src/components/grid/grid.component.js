import React , {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gridActions from './actions';

import DestinationDetailComponent from './popups/package-details/destination-detail.component';
import ContactUsComponent from './popups/contact-us/contact-us-modal.component';

import './grid.component.scss';

class GridComponent extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideDestinationModal = this.hideDestinationModal.bind(this);
    this.contactUs = this.contactUs.bind(this);
    this.hideContactModal = this.hideContactModal.bind(this);
  }
  showModal(city) {
    this.props.actions.toggleDestinationModal(true, city);
  }

  hideDestinationModal() {
    this.props.actions.toggleDestinationModal(false)
  }

  contactUs() {
    this.props.actions.toggleContactModal(true);
  }

  hideContactModal() {
    this.props.actions.toggleContactModal(false);
  }

  render() {
    let gridData = [
                      {
                      	name: "Goa",
                      	thumbnail: "../../../assets/images/Xplor/goa.jpg",
                      	descriptionList: [
                      		"Located at North Goa",
                      		"Flights inclusive",
                      		"Breakfast included",
                      		"Accomodation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Goa1",
                      		"Goa2",
                      		"Goa3"
                      	],
                      	pricePerAdult: 9999,

                      },
                      {
                      	name: "Bangkok",
                      	thumbnail: "../../../assets/images/Xplor/bangkok.jpg",
                      	descriptionList: [
                      		"Located at North Bangkok",
                      		"Flights inclusive",
                      		"Breakfast included",
                      		"Accomodation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Bangkok1",
                      		"Bangkok2",
                      		"Bangkok3"
                      	],
                      	pricePerAdult: 14999,

                      },
                      {
                      	name: "Singapore",
                      	thumbnail: "../../../assets/images/Xplor/singapore.jpg",
                      	descriptionList: [
                      		"Located at North singapore",
                      		"Flights inclusive",
                      		"Breakfast included",
                      		"Accomodation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Singapore1",
                      		"Singapore2",
                      		"Singapore3"
                      	],
                      	pricePerAdult: 20000,

                      },
                      {
                      	name: "Malaysia",
                      	thumbnail: "../../../assets/images/Xplor/malaysia.jpg",
                      	descriptionList: [
                      		"Located at North Malaysia",
                      		"Flights inclusive",
                      		"Breakfast included",
                      		"Accomodation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Malaysia1",
                      		"Malaysia2",
                      		"Malaysia3"
                      	],
                      	pricePerAdult: 24999,

                      },
                      {
                      	name: "Mauritius",
                      	thumbnail: "../../../assets/images/Xplor/mauritius.jpg",
                      	descriptionList: [
                      		"Located at North Mauritius",
                      		"Flights inclusive",
                      		"Breakfast included",
                      		"Accomodation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Mauritius1",
                      		"Mauritius2",
                      		"Mauritius3"
                      	],
                      	pricePerAdult: 13999,

                      },
                      {
                      	name: "Dubai",
                      	thumbnail: "../../../assets/images/Xplor/dubai.jpg",
                      	descriptionList: [
                      		"Located at North Dubai",
                      		"Flights inclusive",
                      		"Breakfast included",
                      		"Accomodation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Dubai1",
                      		"Dubai2",
                      		"Dubai3"
                      	],
                      	pricePerAdult: 30000,

                      }
                   ];
    let grids = gridData.map(function(data) {
      let lists = data.descriptionList.map(function(list) {
        return (
          <li>{list}</li>
        );
      })
      return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className="grid">
            <div className="destination">
              <h3>{data.name}</h3>
            </div>
            <div className="row destinationDetails">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="destinationImage">
                  <img src={data.thumbnail} alt="India" className="img-responsive" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="description">
                  <ul>
                    {lists}
                  </ul>
                </div>
              </div>
            </div>
            <div className="knowMore">
              <input type="button" className="btn btn-primary" value="Know More" onClick={this.showModal.bind(this, data.name)} />
            </div>
          </div>
        </div>
      );
    }.bind(this));
    console.log(this.props.showDestinationModal);
    return(
          <div className="grid-section bg-primary">
            <div className="row">
              {grids}
            </div>
            {this.props.showDestinationModal ? <DestinationDetailComponent show={this.props.showDestinationModal} closeCallBack={this.hideDestinationModal} cityName={this.props.cityName} contactCallback={this.contactUs} /> : null}
            {this.props.showContactModal ? <ContactUsComponent show={this.props.showContactModal} closeCallBack={this.hideContactModal} />: null}
          </div>
    );
  }
}

GridComponent.propTypes = {
  showDestinationModal: PropTypes.bool,
  cityName: PropTypes.string,
  showContactModal: PropTypes.bool
};


const mapStateToProps = (store) => {
  return {
    showDestinationModal: store.gridReducer.showDestinationModal,
    cityName: store.gridReducer.cityName,
    showContactModal: store.gridReducer.showContactModal
 };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gridActions, dispatch)
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridComponent);
