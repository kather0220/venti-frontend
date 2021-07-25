import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryUnderLine } from '../../common/CategoryUnderLine/styles';
import GridWrapper from '../../common/GridWrapper/index';
import BrandListItem from '../../common/BrandListItem/index';
import BrandFilter from '../../common/BrandFilter/index';

function EventPage() {
  const [category, setCategory] = useState('food');
  const [isVisible, setIsVisible] = useState(false);
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
      <S.BlackOverlay visible={isVisible}></S.BlackOverlay>
      <S.FilterContainer visible={isVisible}>
        <S.TextAndButton>
          <S.TopText>브랜드 필터</S.TopText>
          <S.CloseButton
            src={'/img/close-button.png'}
            onClick={() => setIsVisible(false)}
          ></S.CloseButton>
        </S.TextAndButton>
        <S.TopGreyLine></S.TopGreyLine>
        <S.FilterItemContainer>
          <S.FilterItem>VIPS</S.FilterItem>
          <S.FilterItem>BUTTERFLY</S.FilterItem>
          <S.FilterItem>DONE</S.FilterItem>
          <S.FilterItem>APPLE</S.FilterItem>
          <S.FilterItem>NOTHING</S.FilterItem>
          <S.FilterItem>TIRED</S.FilterItem>
          <S.FilterItem>BANANA</S.FilterItem>
          <S.FilterItem>KATHER</S.FilterItem>
          <S.FilterItem>VIPS</S.FilterItem>
          <S.FilterItem>VIPS</S.FilterItem>
          <S.FilterItem>VIPS</S.FilterItem>
          <S.FilterItem>COOKIE</S.FilterItem>
          <S.FilterItem>VIPS</S.FilterItem>
          <S.FilterItem>VIPS</S.FilterItem>
        </S.FilterItemContainer>
      </S.FilterContainer>
      <S.MainContainer>
        <Header></Header>

        <PageTitle>EVENT</PageTitle>
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
          <S.FilterButton
            src={'/img/filter-button-edit.png'}
            onClick={() => setIsVisible(true)}
          ></S.FilterButton>
        </CategoryWrapper>
        <S.CategoryUnderLine></S.CategoryUnderLine>
        <GridWrapper visible={category === 'food'} />
        <GridWrapper visible={category === 'cafe'} />
        <GridWrapper visible={category === 'fashion'} />
      </S.MainContainer>
    </>
  );
}

export default EventPage;
