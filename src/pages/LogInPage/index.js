import React, { useState } from 'react';
import * as S from './styles';

function LogInPage() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
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
  return (
    <S.MainContainer>
      <S.Logo src={'img/Venti.png'}></S.Logo>
      <S.IdPwContainer>
        <S.InputContainer>
          <S.ContainerText>아이디</S.ContainerText>
          <S.IdPwInput id="id" type="text" onChange={onChange}></S.IdPwInput>
        </S.InputContainer>
        <S.InputContainer>
          <S.ContainerText>비밀번호</S.ContainerText>
          <S.IdPwInput
            id="password"
            type="password"
            onChange={onChange}
          ></S.IdPwInput>
        </S.InputContainer>
      </S.IdPwContainer>
      <S.LogInButton>로그인</S.LogInButton>
      <S.SignUpLink>Venti 회원가입</S.SignUpLink>
    </S.MainContainer>
  );
}

export default LogInPage;
