import React, { useState } from 'react';
import * as S from './styles';

function BrandFilter(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [clicked, setClicked] = useState(true);
  const handleClick = (e) => {
    setIsVisible(false);
    setClicked(false);
  };
  return (
    <>
      <S.BlackOverlay visible={props.visible && isVisible}></S.BlackOverlay>
      <S.MainContainer visible={props.visible && isVisible}>
        <S.TextAndButton>
          <S.TopText>브랜드 필터</S.TopText>
          <S.CloseButton
            src={'/img/close-button.png'}
            onClick={handleClick}
          ></S.CloseButton>
        </S.TextAndButton>
      </S.MainContainer>
    </>
  );
}

export default BrandFilter;
