import React from 'react';
import * as S from './styles';

function Footer() {
  return (
    <S.StyledContainer>
      <S.Exp>
        이벤트와 할인정보를 한곳에서 <br />
        Design Your Own Venti!
      </S.Exp>
      <S.LinkInfoWrapper>
        <S.LinkInfo>문의하기</S.LinkInfo>
        <S.LinkInfo>자주 묻는 질문</S.LinkInfo>
        <S.LinkInfo>인스타그램</S.LinkInfo>
        <S.LinkInfo>탈퇴하기</S.LinkInfo>
      </S.LinkInfoWrapper>
    </S.StyledContainer>
  );
}

export default Footer;
