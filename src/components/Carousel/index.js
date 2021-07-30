import React, { Component } from 'react';
import * as S from './styles';
import Slider from 'react-slick';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <S.CarouselContainer>
        <Slider {...settings}>
          <div>
            <S.Banner src={'/img/green-banner.png'}></S.Banner>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </S.CarouselContainer>
    );
  }
}
