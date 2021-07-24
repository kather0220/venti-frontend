import React from 'react';
import * as S from './styles';

function MenuBar(props) {
  return (
    <>
      <S.MainContainer visible={props.visible}>
        <S.TopBar>
          <S.TopBarText>이벤티님 반갑습니다!</S.TopBarText>
          <S.Arrow
            src={'/img/white-arrow.png'}
            onClick={() => (window.location = '/my')}
          ></S.Arrow>
        </S.TopBar>
        <S.MenuName onClick={() => (window.location = '/event')}>
          EVENT
        </S.MenuName>
        <S.MenuName onClick={() => (window.location = '/brand')}>
          BRAND
        </S.MenuName>
        <S.MenuName onClick={() => (window.location = '/my-venti')}>
          MY VENTI
        </S.MenuName>
      </S.MainContainer>
    </>
  );
}

export default MenuBar;
