import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavbarComponent from '../../components/navbar/navbar.component';
import HeaderComponent from '../../components/header/header.component';
import SectionComponent from '../../components/section/section.component';
import AsideComponent from '../../components/aside/aside.component';
import FooterComponent from '../../components/footer/footer.component';
import GridComponent from '../../components/grid/grid.component';

import './dashboard.component.scss';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <HeaderComponent />
        <SectionComponent />
        <GridComponent />
        <AsideComponent />
        <FooterComponent />
      </div>
    );
  }
}

DashboardComponent.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default DashboardComponent;
