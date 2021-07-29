import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import CategoryUnderLine from '../../common/CategoryUnderLine/index';

function MyVentiPage() {
  const [category, setCategory] = useState('event');
  const [isVisible, setIsVisible] = useState(false);
  const [margin, setMargin] = useState('1.067');
  const [width, setWidth] = useState('2.933');
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'event':
        setCategory('event');
        setMargin('1.067');
        setWidth('2.933');
        break;
      case 'brand':
        setCategory('brand');
        setMargin('6.733');
        setWidth('3.133');
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
      </S.MainContainer>
    </>
  );
}

export default MyVentiPage;
