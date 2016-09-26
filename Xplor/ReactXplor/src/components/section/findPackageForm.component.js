import React, {Component,PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';

import './section.component.scss';

class FindPackageFormComponent extends Component {
  render() {
    const { fields: { isIndia, isInternational }, handleSubmit } = this.props
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months.map(function(month){
      return <option value={month}>{month}</option>;
    }.bind(this));

    return (
      <form onSubmit={handleSubmit}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Choose Your Honeymoon Package</h3>
          </div>
          <div className="panel-body panel-body-custom">
            <div className="form-group">
              <label className="radio-inline">
                <input type="radio" {...isIndia} checked />
                India
              </label>
              <label className="radio-inline">
                <input type="radio" {...isInternational} />
                International
              </label>
            </div>
            <div className="form-group">
              <select name="budget">
                <option value="">Budget per Person</option>
                <option value="budget1">Less than ₹ 10,000</option>
                <option value="budget2">₹ 10,000 to ₹ 20,000</option>
                <option value="budget3">₹ 20,000 to ₹ 30,000</option>
                <option value="budget4">₹ 30,000 to ₹ 40,000</option>
                <option value="budget5">More than ₹ 40,000</option>
              </select>
            </div>
            <div className="form-group">
              <select name="nights">
                <option value="">No. of Nights</option>
                <option value="nights1">Less than 3</option>
                <option value="nights2">3 to 7</option>
                <option value="nights3">More than 7</option>
              </select>
            </div>
            <div className="form-group">
              <select name="monthOfTravel">
                <option value="">Month of Travel</option>
                {month}
              </select>
            </div>
            <label className="form-group">Which describes you the best:</label>
            <div className="form-group">
              <div>
              <label className="checkbox-inline">
                  <input type="checkbox" value="option1" id="inlineCheckbox1" /> Adventure
              </label>
              <label className="checkbox-inline">
                  <input type="checkbox" value="option1" id="inlineCheckbox1" /> Nature
              </label>
              <label className="checkbox-inline">
                  <input type="checkbox" value="option1" id="inlineCheckbox1" /> Foodie
              </label>
              <label className="checkbox-inline">
                  <input type="checkbox" value="option1" id="inlineCheckbox1" /> Peace
              </label>
              </div>
              <div>
              <label className="checkbox-inline">
                  <input type="checkbox" value="option1" id="inlineCheckbox1" /> Beach
              </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary center-block">Find Holidays</button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'findPackageForm',
  fields: [ 'isIndia', 'isInternational' ]
})(FindPackageFormComponent)
