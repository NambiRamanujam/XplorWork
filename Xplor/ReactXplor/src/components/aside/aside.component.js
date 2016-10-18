import React , {Component,PropTypes} from 'react';
import Slider from 'react-slick';

import './aside.component.scss';

class AsideComponent extends Component {
  render() {
    let settings = {
      autoplay: true,
      autoplaySpeed: 10000,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite:true,
      nextArrow:<span />,
      prevArrow:<span />
    };
    return(
      <div className="aside bg-dark" id="clientsandpartners">
        <h3 className="col-xs-12 col-md-12">Our Clients <span className="special_amp">&amp;</span> Our Trade Partners</h3>
        <div className="container text-center slicker">
          <Slider {...settings} accessibility={false}>
            <img src="../../../assets/images/Xplor/adds/client_01.jpg" alt="Puravankara" />
            <img src="../../../assets/images/Xplor/adds/client_02.jpg" alt="Delivery" />
            <img src="../../../assets/images/Xplor/adds/client_03.jpg" alt="Nikitha" />
            <img src="../../../assets/images/Xplor/adds/client_04.png" alt="Apranje" />
            <img src="../../../assets/images/Xplor/adds/client_05.jpg" alt="Asset India" />
            <img src="../../../assets/images/Xplor/adds/client_06.jpg" alt="Valmont" />
            <img src="../../../assets/images/Xplor/adds/client_07.jpg" alt="KannadigaruUK" />
            <img src="../../../assets/images/Xplor/adds/client_08.jpg" alt="Rail Europe" />
            <img src="../../../assets/images/Xplor/adds/client_09.jpg" alt="Greenpath" />
            <img src="../../../assets/images/Xplor/adds/client_10.jpg" alt="Ryan" />
            <img src="../../../assets/images/Xplor/adds/client_11.jpg" alt="Epitome" />
            <img src="../../../assets/images/Xplor/adds/client_12.jpg" alt="E-Act" />
            <img src="../../../assets/images/Xplor/adds/client_13.jpg" alt="Hexagon" />
            <img src="../../../assets/images/Xplor/adds/client_14.gif" alt="Samskruthi" />
            <img src="../../../assets/images/Xplor/adds/client_15.png" alt="Taj Tours" />
            <img src="../../../assets/images/Xplor/adds/client_16.jpg" alt="eMudhra" />
            <img src="../../../assets/images/Xplor/adds/client_17.png" alt="Vcc" />
            <img src="../../../assets/images/Xplor/adds/client_18.jpg" alt="R.K.Cottons" />
            <img src="../../../assets/images/Xplor/adds/client_19.jpg" alt="Provident" />
            <img src="../../../assets/images/Xplor/adds/client_20.jpg" alt="SeatonIndia" />
            <img src="../../../assets/images/Xplor/adds/client_21.gif" alt="Star Tours" />
            <img src="../../../assets/images/Xplor/adds/client_22.jpg" alt="North Guru" />
            <img src="../../../assets/images/Xplor/adds/client_23.jpg" alt="TASC" />
          </Slider>
        </div>
      </div>
    );
  }
}

export default AsideComponent;
