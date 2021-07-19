import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryUnderLine } from '../../common/CategoryUnderLine/styles';
import BrandListItem from '../../common/BrandListItem/index';

function EventPage() {
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
      <Header></Header>
      <S.MainContainer>
        <PageTitle>BRAND</PageTitle>
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
        <CategoryUnderLine></CategoryUnderLine>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
        <BrandListItem></BrandListItem>
      </S.MainContainer>
    </>
  );
}

export default EventPage;
