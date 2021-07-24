import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function MenuBar(props) {
  const history = useHistory();
  return (
    <>
      <S.MainContainer visible={props.visible}>
        <S.TopBar>
          <S.TopBarText>이벤티님 반갑습니다!</S.TopBarText>
          <S.Arrow src={'/img/white-arrow.png'}></S.Arrow>
        </S.TopBar>
        <S.MenuName onClick={() => history.push('/event')}>EVENT</S.MenuName>
        <S.MenuName onClick={() => history.push('/brand')}>BRAND</S.MenuName>
        <S.MenuName onClick={() => history.push('/my-venti')}>
          MY VENTI
        </S.MenuName>
      </S.MainContainer>
    </>
  );
}

export default MenuBar;
