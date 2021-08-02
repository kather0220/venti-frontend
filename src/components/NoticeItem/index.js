import React from 'react';
import * as S from './styles';

function NoticeItem() {
  return (
    <>
      <S.ItemContainer>
        <S.BrandLogo
          src={'/img/brand-preference-page-img/아웃백-circle-img.png'}
        ></S.BrandLogo>
        <S.NoticeText>
          vips에서 얌 딜리버리<br></br> 새로운 이벤트가 업데이트 되었어요.
        </S.NoticeText>
        <S.TimeText>3시간전</S.TimeText>
      </S.ItemContainer>
      <S.Line></S.Line>
    </>
  );
}

export default NoticeItem;
