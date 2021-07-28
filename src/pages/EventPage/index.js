import React, { useState, useCallback } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryUnderLine } from '../../common/CategoryUnderLine/styles';
import GridWrapper from '../../common/GridWrapper/index';
import FoodBrandList from '../../data/FoodBrandList';
import FilterItem from '../../components/FilterItem/index';

function EventPage() {
  const [category, setCategory] = useState('food');
  const [isVisible, setIsVisible] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [backgroudColor, setBackgroundColor] = useState('grey');

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
  var brandList = [];
  const clicked = false;
  //var textColor = "white";
  //var backgroundColor = "pink";
  const handleFilterItemClick = (e) => {
    if (brandList.includes(e.target.id)) {
      console.log('중복');
      brandList = brandList.filter((element) => element !== e.target.id);
      console.log(brandList.length);
    } else {
      brandList.push(e.target.id);
    }
    // e.target.isClicked = e.target.isClicked === true ? false : true;
    //e.target.color = e.target.isClicked == true ? 'white' : 'black';
    //e.target.backgroundColor = e.target.isClicked == true ? 'pink' : 'grey';
    console.log(brandList);
    console.log(e.target.isClicked);
    //console.log(e.target.background);
    //console.log(e.target.color);
    //return clicked;
    //return true;
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
          {FoodBrandList.map((brand) => {
            return (
              <FilterItem
                id={brand.name}
                name={brand.name}
                brandList={brandList}
                onClick={() => {
                  return handleFilterItemClick;
                }}
                isClicked={clicked}
              ></FilterItem>
            );
            //<S.FilterItem
            //  id={brand.name}
            // isClicked={clicked}
            // onClick={handleFilterItemClick}
            // >
            //{brand.name}
            //   </S.FilterItem>
          })}
        </S.FilterItemContainer>
        <S.BottomGreyLine></S.BottomGreyLine>
        <S.ButtonContainer>
          <S.Button>적용</S.Button>
        </S.ButtonContainer>
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
