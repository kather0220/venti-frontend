import React, { useState } from 'react';
import Container from '../../common/Container/index';
import Header from '../../common/Header/index';
import GridWrapper from '../../common/GridWrapper/index';
import GridItem from '../../common/GridItem/index';
import * as S from './styles';

function MainPage() {
  const [category, setCategory] = useState({
    food: true,
    cafe: false,
    fashion: false,
  });
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'food':
        setCategory({ food: true, cafe: false, fashion: false });
        //console.log(category);
        break;
      case 'cafe':
        setCategory({ food: false, cafe: true, fashion: false });
        //console.log(category);
        break;
      case 'fashion':
        setCategory({ food: false, cafe: false, fashion: true });
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
            selected={category.food}
            onClick={handleClick}
          >
            FOOD
          </S.CategoryTab>
          <S.CategoryTab
            id="cafe"
            selected={category.cafe}
            onClick={handleClick}
          >
            CAFE
          </S.CategoryTab>
          <S.CategoryTab
            id="fashion"
            selected={category.fashion}
            onClick={handleClick}
          >
            FASHION
          </S.CategoryTab>
        </S.CategoryWrapper>
        <S.CategoryUnderLine></S.CategoryUnderLine>
        <GridWrapper />
      </S.MainContainer>
    </>
  );
}

export default MainPage;
