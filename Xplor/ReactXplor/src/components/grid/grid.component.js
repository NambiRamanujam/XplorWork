import React , {Component,PropTypes} from 'react';

import './grid.component.scss';

class GridComponent extends Component {
  render() {
    let gridData = [
                      {
                      	name: "Goa1",
                      	thumbnail: "../../../assets/images/Xplor/goa1.jpg",
                      	descriptionList: [
                      		"Located at north Goa",
                      		"flights inclusive",
                      		"Breakfast incliuded",
                      		"Accodomation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Goa1",
                      		"Goa2",
                      		"Goa3"
                      	],
                      	pricePerAdult: 9999,

                      },
                      {
                      	name: "Goa2",
                      	thumbnail: "../../../assets/images/Xplor/goa2.jpg",
                      	descriptionList: [
                      		"Located at north Goa",
                      		"flights inclusive",
                      		"Breakfast incliuded",
                      		"Accodomation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Goa1",
                      		"Goa2",
                      		"Goa3"
                      	],
                      	pricePerAdult: 9999,

                      },
                      {
                      	name: "Singapore1",
                      	thumbnail: "../../../assets/images/Xplor/singapore1.jpg",
                      	descriptionList: [
                      		"Located at north singapore",
                      		"flights inclusive",
                      		"Breakfast incliuded",
                      		"Accodomation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Singapore1",
                      		"Singapore2",
                      		"Singapore3"
                      	],
                      	pricePerAdult: 9999,

                      },
                      {
                      	name: "Singapore2",
                      	thumbnail: "../../../assets/images/Xplor/singapore2.jpg",
                      	descriptionList: [
                      		"Located at north Singapore",
                      		"flights inclusive",
                      		"Breakfast incliuded",
                      		"Accodomation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Singapore1",
                      		"Singapore2",
                      		"Singapore3"
                      	],
                      	pricePerAdult: 9999,

                      },
                      {
                      	name: "Mauritius1",
                      	thumbnail: "../../../assets/images/Xplor/mauritius1.jpg",
                      	descriptionList: [
                      		"Located at north Mauritius",
                      		"flights inclusive",
                      		"Breakfast incliuded",
                      		"Accodomation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Mauritius1",
                      		"Mauritius2",
                      		"Mauritius3"
                      	],
                      	pricePerAdult: 9999,

                      },
                      {
                      	name: "Mauritius2",
                      	thumbnail: "../../../assets/images/Xplor/mauritius2.jpg",
                      	descriptionList: [
                      		"Located at north Mauritius",
                      		"flights inclusive",
                      		"Breakfast incliuded",
                      		"Accodomation in quality hotels"
                      	],
                      	placesCovered: [
                      		"Mauritius1",
                      		"Mauritius2",
                      		"Mauritius3"
                      	],
                      	pricePerAdult: 9999,

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
              <input type="button" className="btn btn-primary" value="Know More" />
            </div>
          </div>
        </div>
      );
    })
    return(
          <div className="grid-section">
            <div className="row">
              {grids}
            </div>
          </div>
    );
  }
}

export default GridComponent;
