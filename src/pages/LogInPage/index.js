import React, { useState } from 'react';
import * as S from './styles';

function LogInPage() {
  const [userId, setUserId] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const onChange = (event) => {
    const {
      target: { id, value },
    } = event;
    switch (id) {
      case 'id':
        setUserId(value);
        break;
      case 'password':
        setUserPassword(value);
        break;
      default:
        break;
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!userId || !userPassword) alert('정보를 모두 입력해주세요!');
    // post 추가 예정
  };
  return (
    <S.MainContainer>
      <S.Logo src={'img/Venti.png'}></S.Logo>
      <S.IdPwContainer>
        <S.InputContainer>
          <S.ContainerText>아이디</S.ContainerText>
          <S.IdInput id="id" type="text" onChange={onChange}></S.IdInput>
        </S.InputContainer>
        <S.InputContainer>
          <S.ContainerText>비밀번호</S.ContainerText>
          <S.PwInput
            id="password"
            type="password"
            onChange={onChange}
          ></S.PwInput>
        </S.InputContainer>
      </S.IdPwContainer>
      <S.LogInButton onClick={handleClick}>로그인</S.LogInButton>
      <S.SignUpLink to="/sign-up">Venti 회원가입</S.SignUpLink>
    </S.MainContainer>
  );
}

export default LogInPage;
