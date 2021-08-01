import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/index';

function WithdrawalPage() {
  const [clicked, setClicked] = useState('');
  const history = useHistory();
  const handleRadioClick = (e) => {
    switch (e.target.value) {
      case '0':
        setClicked('0');
        break;
      case '1':
        setClicked('1');
        break;
      case '2':
        setClicked('2');
        break;
      case '3':
        setClicked('3');
        break;
      default:
        break;
    }
  };
  const handleClick = () => {
    if (clicked === '') alert('탈퇴 이유를 알려주세요!');
    else {
      alert('탈퇴 완료되었습니다. 벤티를 이용해주셔서 감사드립니다.');
      history.push('/');
    }
  };
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
              onClick={handleRadioClick}
              checked={clicked === '0'}
            ></S.RadioButton>
            이벤트를 보고싶은 브랜드가 없어서
          </S.ButtonLabel>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="1"
              onClick={handleRadioClick}
              checked={clicked === '1'}
            ></S.RadioButton>
            원하는 이벤트가 없어서
          </S.ButtonLabel>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="2"
              onClick={handleRadioClick}
              checked={clicked === '2'}
            ></S.RadioButton>
            VENTI 서비스를 사용해도 이벤트를 놓쳐서
          </S.ButtonLabel>
          <S.ButtonLabel>
            <S.RadioButton
              type="radio"
              value="3"
              onClick={handleRadioClick}
              checked={clicked === '3'}
            ></S.RadioButton>
            기타
          </S.ButtonLabel>
          <S.Button onClick={handleClick}>회원 탈퇴하기</S.Button>
        </S.OptionContainer>
      </S.MainContainer>
      <Footer></Footer>
    </>
  );
}

export default WithdrawalPage;
