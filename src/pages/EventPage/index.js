import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryUnderLine } from '../../common/CategoryUnderLine/styles';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';
import FoodBrandList from '../../data/FoodBrandList';
import CafeBrandList from '../../data/CafeBrandList';
import FashionBrandList from '../../data/FashionBrandList';
import FilterItem from '../../components/FilterItem/index';
import Footer from '../../common/Footer';
import { API_BASE_URL } from '../../constants';
import axios from 'axios';

function EventPage() {
  const [category, setCategory] = useState('food');
  const [isVisible, setIsVisible] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foodEventList, setFoodEventList] = useState([]);
  const [cafeEventList, setCafeEventList] = useState([]);
  const [fashionEventList, setFashionEventList] = useState([]);
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
  const getEventList = async (category) => {
    try {
      setError(null);
      setLoading(true);
      //console.log(headers);
      const date = new Date();
      console.log(date);
      const params = {
        category_id: category,
        brand_id: [],
      };
      const res = await axios.post(
        API_BASE_URL + '/api/guest/event_main/',
        params
      );

      console.log(res.data);
      //setResponse(res.data.event);
      switch (category) {
        case 1:
          setFoodEventList(res.data.event);
          break;
        case 2:
          setCafeEventList(res.data.event);
          break;
        case 3:
          setFashionEventList(res.data.event);
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  ///api/brands/{id}/

  useEffect(() => {
    getEventList(1);
    getEventList(2);
    getEventList(3);
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  /*
  useEffect(() => {
    console.log(brandList);
  }, [brandList]);
*/
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
          })}
        </S.FilterItemContainer>
        <S.FilterItemContainer visible={category === 'cafe'}>
          {CafeBrandList.map((brand) => {
            return (
              <FilterItem
                id={brand.name}
                name={brand.name}
                //brandList={brandList}
                onClick={handleFilterItemClick}
                //isClied={clicked}
              ></FilterItem>
            );
          })}
        </S.FilterItemContainer>
        <S.FilterItemContainer visible={category === 'fashion'}>
          {FashionBrandList.map((brand) => {
            return (
              <FilterItem
                id={brand.name}
                name={brand.name}
                //brandList={brandList}
                onClick={handleFilterItemClick}
                //isClied={clicked}
              ></FilterItem>
            );
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
        <GridWrapper visible={category === 'food'}>
          {foodEventList.map((event) => {
            return (
              <GridItem
                id={event.id}
                eventName={event.name}
                brandName={event.brand_id}
                img={event.image}
                // onClick={handleBrandImageClick}
                view={event.view}
                due={event.due}
              ></GridItem>
            );
          })}
        </GridWrapper>
        <GridWrapper visible={category === 'cafe'}>
          {cafeEventList.map((event) => {
            return (
              <GridItem
                id={event.id}
                eventName={event.name}
                brandName={event.brand_id}
                img={event.image}
                // onClick={handleBrandImageClick}
                view={event.view}
                due={event.due}
              ></GridItem>
            );
          })}
        </GridWrapper>
        <GridWrapper visible={category === 'fashion'}>
          {fashionEventList.map((event) => {
            return (
              <GridItem
                id={event.id}
                eventName={event.name}
                brandName={event.brand_id}
                img={event.image}
                // onClick={handleBrandImageClick}
                view={event.view}
                due={event.due}
              ></GridItem>
            );
          })}
        </GridWrapper>
      </S.MainContainer>
      <Footer></Footer>
    </>
  );
}

export default EventPage;
