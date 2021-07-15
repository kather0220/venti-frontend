import React, { useState } from 'react';
import Container from '../../common/Container/index';
import Header from '../../common/Header/index';
import GridWrapper from '../../common/GridWrapper/index';
import GridItem from '../../common/GridItem/index';
import Footer from '../../common/Footer/index';
import * as S from './styles';

function MainPage() {
  const [category, setCategory] = useState('food');
  // 전부 다 false 로 만드는 함수 만들기!
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'food':
        setCategory('food');
        //console.log(category);
        break;
      case 'cafe':
        setCategory('cafe');
        //console.log(category);
        break;
      case 'fashion':
        setCategory('fashion');
        //console.log(category);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.Banner src={'/img/green-banner.png'}></S.Banner>
        <S.EventsForYou>EVENTS FOR YOU</S.EventsForYou>
        <S.CategoryWrapper>
          <S.CategoryTab
            id="food"
            selected={category === 'food'}
            onClick={handleClick}
          >
            FOOD
          </S.CategoryTab>
          <S.CategoryTab
            id="cafe"
            selected={category === 'cafe'}
            onClick={handleClick}
          >
            CAFE
          </S.CategoryTab>
          <S.CategoryTab
            id="fashion"
            selected={category === 'fashion'}
            onClick={handleClick}
          >
            FASHION
          </S.CategoryTab>
        </S.CategoryWrapper>
        <S.CategoryUnderLine></S.CategoryUnderLine>
        <GridWrapper />
        <GridWrapper />
        <GridWrapper />
        <Footer></Footer>
      </S.MainContainer>
    </>
  );
}

export default MainPage;
