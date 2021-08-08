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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <S.CarouselContainer>
        <Slider {...settings}>
          {this.props.weekly_list.map((brand) => {
            return (
              <div>
                <S.Banner
                  src={brand.brand_banner_url}
                  onClick={() =>
                    (window.location = `/brand-detail/${brand.brand_id}`)
                  }
                ></S.Banner>
              </div>
            );
          })}
        </Slider>
      </S.CarouselContainer>
    );
  }
}
