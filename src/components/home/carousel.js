import React, { Component } from 'react';
import Slider from 'react-slick';

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: '',
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay:true,
      arrows: true,
    };
    return (
      <div className="container-fluid">
        <Slider {...settings}>
          <div><img src={require('./slide1.png')} role="presentation" className="carou" /></div>
          <div><img src={require('./slide2.png')} role="presentation" className="carou" /></div>
          <div><img src={require('./slide3.png')} role="presentation" className="carou" /></div>
          <div><img src={require('./slide4.png')} role="presentation" className="carou" /></div>
          <div><img src={require('./slide5.png')} role="presentation" className="carou" /></div>
          <div><img src={require('./slide6.png')} role="presentation" className="carou" /></div>
          <div><img src={require('./slide7.png')} role="presentation" className="carou" /></div>
        </Slider>
      </div>
    );
  }
}