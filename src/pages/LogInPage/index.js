import React from 'react';
import * as S from './styles';

function LogInPage() {
  return (
    <S.MainContainer>
      <S.Logo src={'img/Venti.png'}></S.Logo>
      <S.IdPwContainer>
        <S.InputContainer>
          <S.ContainerText>아이디</S.ContainerText>
          <S.IdPwInput></S.IdPwInput>
        </S.InputContainer>
        <S.InputContainer>
          <S.ContainerText>비밀번호</S.ContainerText>
          <S.IdPwInput type="password"></S.IdPwInput>
        </S.InputContainer>
      </S.IdPwContainer>
    </S.MainContainer>
  );
}

export default LogInPage;
