import React, { useState } from 'react';
import Header from '../../common/Header/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';
import Footer from '../../common/Footer/index';
import * as S from './styles';

function MainPage() {
  const [category, setCategory] = useState('food');
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'food':
        setCategory('food');
        break;
      case 'cafe':
        setCategory('cafe');
        break;
      case 'fashion':
        setCategory('fashion');
        break;
      default:
        break;
    }
  };
  return (
    <>
      <S.MainContainer>
        <Header></Header>

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
        <GridWrapper visible={category === 'food'}>
          <GridItem></GridItem>

          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridWrapper>
        <GridWrapper visible={category === 'cafe'} />
        <GridWrapper visible={category === 'fashion'} />
        <Footer></Footer>
      </S.MainContainer>
    </>
  );
}

export default MainPage;
