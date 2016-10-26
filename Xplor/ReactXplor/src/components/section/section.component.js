import React , {Component,PropTypes} from 'react';
import FindPackageFormComponent from './findPackageForm.component';

import './section.component.scss';

class SectionComponent extends Component {
  render() {
    return(
      <div className="section bg-primary" id="about">
        <div className="container-fluid">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <FindPackageFormComponent />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                  <h4 className="text-left text-heading">International Honeymoon Packages </h4>
                  <p className="text-justify">
                      Do you think that the beautiful journey of your marriage should begin from a beautiful destination? Planning a surprise honeymoon is an ultimate romantic gesture, and the greatest gift you could ever give her. Thomas Cook introduces great honeymoon packages for couples who wish to make their honeymoon the most beautiful and memorable event of their life. From pristine azure beaches and luxury resorts of Maldives and Mauritius to the beautiful landscapes of Switzerland and Thailand, honeymoon packages are abound. Your hunt for the honeymoon destinations is over, as Thomas Cook’s honeymoon packages include the most exotic international honeymoon destinations where you can cherish romantic moments, and bring some unforgettable memories back home.
                  </p>

                  <h4 className="text-left text-heading">India Honeymoon Packages </h4>
                  <p className="text-justify">
                      If you haven’t seen your dream destinations in India yet, why not take a trip to those special places with the love of your life. Thomas Cook’s honeymoon packages give you a chance to revel in the raw beauty and untrodden pathways of India. Whether you want to bask in the peaceful and serene backwaters of Kerala, unwind in the untouched hill stations of North East, or you want to romance under the starlit sky in Ladakh, Thomas Cook’s honeymoon packages include the best honeymoon destinations in India that will leave you love-struck. If you want to make your honeymoon the most special and pleasant memory of your life, honeymoon packages in India are awaiting you.
                  </p>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SectionComponent;
