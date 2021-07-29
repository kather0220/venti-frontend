import React, { useState } from 'react';
import * as S from './styles';

function PreferenceItem(props) {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (clicked === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setClicked(!clicked);
    return true;
  };
  return (
    <S.Container>
      <S.BrandContainer>
        <S.BrandImageOverlay
          id={props.id}
          isVisible={visible}
          onClick={(e) => {
            handleClick(e);
            props.onClick(e);
          }}
        />
      </S.BrandContainer>
      <S.BrandContainer>
        <S.BrandImage
          //isClicked={clicked}
          onClick={(e) => {
            handleClick(e);
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
