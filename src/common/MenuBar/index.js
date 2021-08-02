import React from 'react';
import * as S from './styles';
import { ACCESS_TOKEN } from '../../constants';
import getUserId from '../../functions/getUserId';

function MenuBar(props) {
  //const name = localStorage.getItem();
  function getJSON(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  const user_id = localStorage.getItem(ACCESS_TOKEN)
    ? getUserId(ACCESS_TOKEN)
    : null;
  return (
    <>
      <S.MainContainer visible={props.visible}>
        {user_id ? (
          <S.TopBar>
            <S.TopBarText>{user_id}님 반갑습니다!</S.TopBarText>
            <S.Arrow
              src={'/img/white-arrow.png'}
              onClick={() => (window.location = '/my')}
            ></S.Arrow>
          </S.TopBar>
        ) : (
          <S.TopBar>
            <S.TopBarText>로그인이 필요합니다.</S.TopBarText>
            <S.Arrow
              src={'/img/white-arrow.png'}
              onClick={() => (window.location = '/log-in')}
            ></S.Arrow>
          </S.TopBar>
        )}
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
