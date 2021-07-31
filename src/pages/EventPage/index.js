import React, { useState, useEffect } from 'react';
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
  const [brandList, setBrandList] = useState([]);
  const foodBrandList;
  const cafeBrandList;
  const fashionBrandList;
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

  const handleFilterItemClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (brandList.includes(e.target.id)) {
      console.log('중복');
      setBrandList(brandList.filter((element) => element !== e.target.id));
      console.log(brandList.length);
    } else {
      setBrandList([...brandList, e.target.id]);
    }
  };
  switch(category){
    case 'food':
      foodBrandList=brandList;
      break;
    case 'cafe':
      cafeBrandList = brandList;
      break;
    case 'fashion':
      fashionBrandList=brandList;
      break;
    default:
      break;
  }
  useEffect(() => {
    console.log(brandList);
  }, [brandList]);

  const handleFilterApply = () => {
    alert('필터링 적용이 완료되었습니다.');
    setIsVisible(false);
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
        <S.FilterItemContainer visible={category === 'food'}>
          {FoodBrandList.map((brand) => {
            return (
              <FilterItem
                id={brand.name}
                name={brand.name}
                //brandList={brandList}
                onClick={handleFilterItemClick}
                //isClied={clicked}
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
          <S.Button
            onClick={handleFilterApply}
            disabled={brandList.length === 0}
          >
            적용
          </S.Button>
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
