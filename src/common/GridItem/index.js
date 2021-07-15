import * as S from './styles';
import React from 'react';

function GridItem() {
  return (
    <>
      <S.GridItemContainer>
        <S.GridImage src={'/img/whopper-event.png'} />
        <S.FirstRow>
          <S.EventName>6월 와퍼 할인 이벤트</S.EventName>
          <S.HeartIcon src={'/img/heart.png'} />
        </S.FirstRow>
        <S.SecondRow>버거킹</S.SecondRow>
        <S.ThirdRow>D-5{'     '}조회 130회</S.ThirdRow>
      </S.GridItemContainer>
    </>
  );
}

export default GridItem;
