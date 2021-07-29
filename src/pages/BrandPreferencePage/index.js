import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import PreferenceItem from '../../components/PreferenceItem/index';
import FoodBrandList from '../../data/FoodBrandList';

function BrandPreferencePage() {
  //var brandList = [];
  //const clicked = false;
  const [brandList, setBrandList] = useState([]);
  const history = useHistory();
  const handleBrandImageClick = (e) => {
    if (brandList.includes(e.target.id)) {
      console.log('중복');
      setBrandList(brandList.filter((element) => element !== e.target.id));
      console.log(brandList.length);
    } else {
      setBrandList([...brandList, e.target.id]);
    }
    //e.target.isClicked = e.target.isClicked === true ? false : true;
    console.log(brandList);
    console.log(e.target.isClicked);
  };
  const handleClickButton = () => {
    // post 추가 예정
    alert('선호 브랜드 등록이 완료되었습니다!');
    history.push('/log-in');
  };
  return (
    <S.MainContainer>
      <S.Exp>
        <name>이벤티</name>님이<br></br>선호하시는 브랜드를 알려주세요
        <br></br>
        <text>선택한 브랜드의 이벤트를 알림으로 받을 수 있어요</text>
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
      <S.SelectButton
        disabled={brandList.length === 0}
        onClick={handleClickButton}
      >
        선택완료
      </S.SelectButton>
    </S.MainContainer>
  );
}

export default BrandPreferencePage;
