import React from 'react';
import * as S from './styles';

function BrandListItem() {
  return (
    <S.ListItemBox>
      <S.BrandImage
        src={'/img/brand-preference-page-img/vips-circle-img.png'}
      ></S.BrandImage>
      <S.BrandName>VIPS</S.BrandName>
      <S.Star src={'img/filled-star.png'}></S.Star>
    </S.ListItemBox>
  );
}

export default BrandListItem;
