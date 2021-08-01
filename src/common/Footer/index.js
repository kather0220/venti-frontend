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
        <S.LinkInfo
          to="#"
          onClick={(e) => {
            window.location = 'mailto:eventventi@gmail.com';
            e.preventDefault();
          }}
        >
          문의하기
        </S.LinkInfo>
        <S.LinkInfo
          onClick={(e) => {
            window.location = '/faq';
            e.preventDefault();
          }}
        >
          자주 묻는 질문
        </S.LinkInfo>
        <S.LinkInfo
          to={{
            pathname:
              'https://www.instagram.com/event_is_venti/?utm_medium=copy_link',
          }}
          target="_blank"
        >
          인스타그램
        </S.LinkInfo>
        <S.LinkInfo
          onClick={(e) => {
            window.location = '/withdrawal';
            e.preventDefault();
          }}
        >
          탈퇴하기
        </S.LinkInfo>
      </S.LinkInfoWrapper>
    </S.StyledContainer>
  );
}

export default Footer;
