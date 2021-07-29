import React, { useState } from 'react';
import Header from '../../common/Header/index';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import CategoryUnderLine from '../../common/CategoryUnderLine/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';
import Footer from '../../common/Footer/index';
import * as S from './styles';

function MainPage() {
  const [category, setCategory] = useState('food');
  const [margin, setMargin] = useState('1.067');
  const [width, setWidth] = useState('2.467');
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'food':
        setCategory('food');
        setMargin('1.067');
        setWidth('2.457');
        break;
      case 'cafe':
        setCategory('cafe');

        setMargin('6.3');
        setWidth('2.457');
        break;
      case 'fashion':
        setCategory('fashion');
        setMargin('11.3');
        setWidth('4.233');
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
        <S.Exp>나를 위한 새로운 이벤트</S.Exp>
        <CategoryWrapper>
          <CategoryTab
            id="food"
            selected={category === 'food'}
            onClick={handleClick}
          >
            FOOD
          </CategoryTab>
          <CategoryTab
            id="cafe"
            selected={category === 'cafe'}
            onClick={handleClick}
          >
            CAFE
          </CategoryTab>
          <CategoryTab
            id="fashion"
            selected={category === 'fashion'}
            onClick={handleClick}
          >
            FASHION
          </CategoryTab>
        </CategoryWrapper>
        <CategoryUnderLine margin={margin} width={width}></CategoryUnderLine>
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
