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
import LoadingScreen from '../../common/LoadingScreen';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function EventPage() {
  const [category, setCategory] = useState('food');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foodEventList, setFoodEventList] = useState([]);
  const [cafeEventList, setCafeEventList] = useState([]);
  const [fashionEventList, setFashionEventList] = useState([]);
  const [foodBrandList, setFoodBrandList] = useState([]);
  const [cafeBrandList, setCafeBrandList] = useState([]);
  const [fashionBrandList, setFashionBrandList] = useState([]);
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
    switch (category) {
      case 'food':
        handleFoodBrandList(e);
        break;
      case 'cafe':
        handleCafeBrandList(e);
        break;
      case 'fashion':
        handleFashionBrandList(e);
        break;
      default:
        break;
    }
  };
  const handleFoodBrandList = (e) => {
    console.log(e.target.id);
    if (foodBrandList.includes(e.target.id)) {
      console.log('중복');
      setFoodBrandList(
        foodBrandList.filter((element) => element !== e.target.id)
      );
      console.log(foodBrandList.length);
    } else {
      setFoodBrandList([...foodBrandList, e.target.id]);
    }
  };
  const handleCafeBrandList = (e) => {
    console.log(e.target.id);
    if (cafeBrandList.includes(e.target.id)) {
      console.log('중복');
      setCafeBrandList(
        cafeBrandList.filter((element) => element !== e.target.id)
      );
      console.log(cafeBrandList.length);
    } else {
      setCafeBrandList([...cafeBrandList, e.target.id]);
    }
  };
  const handleFashionBrandList = (e) => {
    console.log(e.target.id);
    if (fashionBrandList.includes(e.target.id)) {
      console.log('중복');
      setFashionBrandList(
        fashionBrandList.filter((element) => element !== e.target.id)
      );
      console.log(fashionBrandList.length);
    } else {
      setFashionBrandList([...fashionBrandList, e.target.id]);
    }
  };
  const getEventList = async (category, brandList) => {
    try {
      setError(null);
      setLoading(true);
      console.log(brandList);
      const params = {
        category_id: category,
        brand_name: brandList,
      };
      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/events/main/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/event_main/', params);

      console.log(res.data);
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

  useEffect(() => {
    getEventList(1, []);
    getEventList(2, []);
    getEventList(3, []);
  }, []);
  useEffect(() => {
    console.log(foodBrandList);
  }, [foodBrandList]);
  useEffect(() => {
    console.log(cafeBrandList);
  }, [cafeBrandList]);
  useEffect(() => {
    console.log(fashionBrandList);
  }, [fashionBrandList]);

  if (loading) return <LoadingScreen />;
  if (error) return <div>에러가 발생했습니다.</div>;

  const handleFilterApply = () => {
    switch (category) {
      case 'food':
        getEventList(1, foodBrandList);
        setFoodBrandList([]);
        break;
      case 'cafe':
        getEventList(2, cafeBrandList);
        setCafeBrandList([]);
        break;
      case 'fashion':
        getEventList(3, fashionBrandList);
        setFashionBrandList([]);
        break;
      default:
        break;
    }
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
            visible={category === 'food'}
            onClick={handleFilterApply}
            disabled={foodBrandList.length === 0}
          >
            적용
          </S.Button>
          <S.Button
            visible={category === 'cafe'}
            onClick={handleFilterApply}
            disabled={cafeBrandList.length === 0}
          >
            적용
          </S.Button>
          <S.Button
            visible={category === 'fashion'}
            onClick={handleFilterApply}
            disabled={fashionBrandList.length === 0}
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
        <CategoryUnderLine></CategoryUnderLine>
        <GridWrapper visible={category === 'food'}>
          {foodEventList.length !== 0 ? (
            foodEventList.map((event) => {
              return (
                <GridItem
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_name}
                  img={event.event_img_url}
                  // onClick={handleBrandImageClick}
                  view={event.view}
                  due={event['d-day']}
                  subs={event.subs}
                ></GridItem>
              );
            })
          ) : (
            <S.NoEventMessage>진행중인 이벤트가 없습니다!</S.NoEventMessage>
          )}
        </GridWrapper>
        <GridWrapper visible={category === 'cafe'}>
          {cafeEventList.length !== 0 ? (
            cafeEventList.map((event) => {
              return (
                <GridItem
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_name}
                  img={event.event_img_url}
                  // onClick={handleBrandImageClick}
                  view={event.view}
                  due={event['d-day']}
                  subs={event.subs}
                ></GridItem>
              );
            })
          ) : (
            <S.NoEventMessage>진행중인 이벤트가 없습니다!</S.NoEventMessage>
          )}
        </GridWrapper>
        <GridWrapper visible={category === 'fashion'}>
          {fashionEventList.length !== 0 ? (
            fashionEventList.map((event) => {
              return (
                <GridItem
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_name}
                  img={event.event_img_url}
                  // onClick={handleBrandImageClick}
                  view={event.view}
                  due={event['d-day']}
                  subs={event.subs}
                ></GridItem>
              );
            })
          ) : (
            <S.NoEventMessage>진행중인 이벤트가 없습니다!</S.NoEventMessage>
          )}
        </GridWrapper>
      </S.MainContainer>
      <Footer top={5}></Footer>
    </>
  );
}

export default EventPage;
