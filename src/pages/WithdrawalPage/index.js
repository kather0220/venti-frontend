import React from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/index';

function WithdrawalPage() {
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.PageTitle>탈퇴하기</S.PageTitle>
        <S.Exp>
          회원을 탈퇴하시겠습니까?<br></br> VENTI 서비스를 탈퇴하는 이유를
          알려주세요
        </S.Exp>
        <S.OptionContainer>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="0"
              //onClick={handleRadioClick}
              //checked={isMale}
            ></S.RadioButton>
            이벤트를 보고싶은 브랜드가 없어서
          </S.ButtonLabel>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="1"
              //onClick={handleRadioClick}
              //checked={isMale}
            ></S.RadioButton>
            원하는 이벤트가 없어서
          </S.ButtonLabel>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="2"
              //onClick={handleRadioClick}
              //checked={isMale}
            ></S.RadioButton>
            VENTI 서비스를 사용해도 이벤트를 놓쳐서
          </S.ButtonLabel>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="3"
              //onClick={handleRadioClick}
              //checked={isMale}
            ></S.RadioButton>
            기타
          </S.ButtonLabel>
          <S.Button>회원 탈퇴하기</S.Button>
        </S.OptionContainer>
      </S.MainContainer>
      <Footer></Footer>
    </>
  );
}

export default WithdrawalPage;
