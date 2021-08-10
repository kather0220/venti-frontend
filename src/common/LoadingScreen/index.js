import * as S from './styles';
import React from 'react';

function LoadingScreen() {
  return (
    <S.MainConatiner>
      <S.Spinner src={'/img/Spinner.gif'}></S.Spinner>
      <S.LoadingText>로딩중...</S.LoadingText>
    </S.MainConatiner>
  );
}

export default LoadingScreen;
