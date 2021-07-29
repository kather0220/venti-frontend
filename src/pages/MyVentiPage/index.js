import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import CategoryUnderLine from '../../common/CategoryUnderLine/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';
import { BrandListContainer } from '../../common/BrandListContainer/styles';
import BrandListItem from '../../common/BrandListItem/index';

function MyVentiPage() {
  const [category, setCategory] = useState('event');
  const [isVisible, setIsVisible] = useState(false);
  const [margin, setMargin] = useState('1.067');
  const [width, setWidth] = useState('2.783');
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'event':
        setCategory('event');
        setMargin('1.067');
        setWidth('2.783');
        break;
      case 'brand':
        setCategory('brand');
        setMargin('6.833');
        setWidth('2.983');
        break;

      default:
        break;
    }
  };
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <PageTitle>MY VENTI</PageTitle>
        <S.Exp>선택한 브랜드와 이벤트를 모아볼 수 있어요</S.Exp>
        <CategoryWrapper>
          <CategoryTab
            id="event"
            selected={category === 'event'}
            onClick={handleClick}
          >
            EVENT
          </CategoryTab>
          <CategoryTab
            id="brand"
            selected={category === 'brand'}
            onClick={handleClick}
          >
            BRAND
          </CategoryTab>
        </CategoryWrapper>
        <CategoryUnderLine margin={margin} width={width}></CategoryUnderLine>
        <GridWrapper visible={category === 'event'}>
          <GridItem></GridItem>

          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridWrapper>
        <BrandListContainer visible={category === 'brand'}>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
          <BrandListItem></BrandListItem>
        </BrandListContainer>
      </S.MainContainer>
    </>
  );
}

export default MyVentiPage;
