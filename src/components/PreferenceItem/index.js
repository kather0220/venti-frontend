import React from 'react';
import * as S from './styles';

function PreferenceItem(props) {
  return (
    <S.Container>
      <S.BrandContainer>
        <S.BrandImageOverlay />
      </S.BrandContainer>
      <S.BrandContainer>
        <S.BrandImage
          //isClicked={clicked}
          onClick={(e) => {
            props.onClick(e);
          }}
          id={props.id}
          src={'/img/brand-preference-page-img/vips-circle-img.png'}
        ></S.BrandImage>
        <S.BrandName>{props.name}</S.BrandName>
      </S.BrandContainer>
    </S.Container>
  );
}

export default PreferenceItem;
