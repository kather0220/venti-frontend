import React, { useState } from 'react';
import Header from '../../common/Header/index';
import GridWrapper from '../../common/GridWrapper/index';
import Footer from '../../common/Footer/index';
import * as S from './styles';

function MainPage() {
  const [category, setCategory] = useState('food');
  // 전부 다 false 로 만드는 함수 만들기!
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    console.log(id);
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
    console.log(category);
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
        <GridWrapper visible={category === 'food'} />
        <GridWrapper visible={category === 'cafe'} />
        <GridWrapper visible={category === 'fashion'} />
        <Footer></Footer>
      </S.MainContainer>
    </>
  );
}

export default MainPage;
