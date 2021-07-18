import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../common/Button/index';
import * as S from './styles';

function SignUpPage() {
  const history = useHistory();
  return (
    <S.MainContainer>
      <S.TopBar>
        <S.PageName>회원가입</S.PageName>
        <S.CloseButton
          src={'/img/close-button.png'}
          onClick={(e) => history.push('/log-in')}
        ></S.CloseButton>
      </S.TopBar>
      <S.InputExp>닉네임</S.InputExp>
      <S.InputBox placeholder="닉네임을 입력하세요"></S.InputBox>
      <S.InputExp>아이디</S.InputExp>
      <S.InputBox placeholder="아이디를 입력하세요"></S.InputBox>
      <S.InputExp>비밀번호</S.InputExp>
      <S.InputBox placeholder="비밀번호"></S.InputBox>
      <S.InputBox placeholder="비밀번호 확인"></S.InputBox>
      <S.InputExp>이메일</S.InputExp>
      <S.InputBox placeholder="이메일 주소"></S.InputBox>
      <S.InputExp>성별(선택)</S.InputExp>
      <S.ButtonContainer>
        <S.RadioButton type="radio"></S.RadioButton>
        <S.ButtonText>남</S.ButtonText>
        <S.RadioButton type="radio"></S.RadioButton>
        <S.ButtonText>여</S.ButtonText>
      </S.ButtonContainer>
      <S.InputExp>생년월일(선택)</S.InputExp>

      <S.InputBox type="date" value="2000-02-20"></S.InputBox>
      <S.StyledButton>회원가입</S.StyledButton>
    </S.MainContainer>
  );
}

export default SignUpPage;
