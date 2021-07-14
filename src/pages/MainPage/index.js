import React from 'react';
import Container from '../../common/Container/index';
import Header from '../../common/Header/index';
import * as S from './styles';

function MainPage() {
  return (
    //<Container>
    <div>
      <Header></Header>
      <S.Banner src={'/img/green-banner.png'}></S.Banner>
    </div>
    //</Container>
  );
}

export default MainPage;
