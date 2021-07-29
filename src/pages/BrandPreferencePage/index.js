import React from 'react';
import * as S from './styles';
import PreferenceItem from '../../components/PreferenceItem/index';
import FoodBrandList from '../../data/FoodBrandList';

function BrandPreferencePage() {
  var brandList = [];
  const clicked = false;
  const handleBrandImageClick = (e) => {
    if (brandList.includes(e.target.id)) {
      console.log('중복');
      brandList = brandList.filter((element) => element !== e.target.id);
      console.log(brandList.length);
    } else {
      brandList.push(e.target.id);
    }
    e.target.isClicked = e.target.isClicked === true ? false : true;
    console.log(brandList);
    console.log(e.target.isClicked);
  };

  return (
    <S.MainContainer>
      <S.Exp>
        <name>이벤티</name>님이<br></br>선호하시는 브랜드를 알려주세요
      </S.Exp>
      <S.GridWrapper>
        {FoodBrandList.map((brand) => {
          return (
            <PreferenceItem
              id={brand.name}
              name={brand.name}
              onClick={handleBrandImageClick}
            ></PreferenceItem>
          );
        })}
      </S.GridWrapper>
      <S.OpacityBox />
      <S.SelectButton disabled={!brandList.length}>선택완료</S.SelectButton>
    </S.MainContainer>
  );
}

export default BrandPreferencePage;
