import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';

import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import CategoryUnderLine from '../../common/CategoryUnderLine';
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
import queryString from 'query-string';
// import { Redirect } from 'react-router';

const EventPage = ({ match, location }) => {
  const query = queryString.parse(location.search);
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
  const [foodNextPage, setFoodNextPage] = useState(1);
  const [cafeNextPage, setCafeNextPage] = useState(1);
  const [fashionNextPage, setFashionNextPage] = useState(1);
  const [clickFoodFilterReset, setClickFoodFilterReset] = useState(false);
  const [clickCafeFilterReset, setClickCafeFilterReset] = useState(false);
  const [clickFashionFilterReset, setClickFashionFilterReset] = useState(false);

  const handleFilterItemClick = (e) => {
    e.preventDefault();
    switch (category) {
      case 'food':
        setClickFoodFilterReset(false);
        handleFoodBrandList(e);
        break;
      case 'cafe':
        setClickCafeFilterReset(false);
        handleCafeBrandList(e);
        break;
      case 'fashion':
        setClickFashionFilterReset(false);
        handleFashionBrandList(e);
        break;
      default:
        break;
    }
  };
  const handleFoodBrandList = (e) => {
    if (foodBrandList.includes(e.target.id)) {
      setFoodBrandList(
        foodBrandList.filter((element) => element !== e.target.id)
      );
    } else {
      setFoodBrandList([...foodBrandList, e.target.id]);
    }
    console.log(foodBrandList);
  };
  const handleCafeBrandList = (e) => {
    if (cafeBrandList.includes(e.target.id)) {
      setCafeBrandList(
        cafeBrandList.filter((element) => element !== e.target.id)
      );
    } else {
      setCafeBrandList([...cafeBrandList, e.target.id]);
    }
  };
  const handleFashionBrandList = (e) => {
    if (fashionBrandList.includes(e.target.id)) {
      setFashionBrandList(
        fashionBrandList.filter((element) => element !== e.target.id)
      );
    } else {
      setFashionBrandList([...fashionBrandList, e.target.id]);
    }
  };
  const getEventList = async (query) => {
    try {
      setError(null);
      setLoading(true);
      var category = parseInt(query.category);
      let brandList = query.brands;

      var params;
      if (category != 1 && category != 2 && category != 3) {
        category = 1;
        params = {
          category_id: category,
          brand_name: [],
        };
      }

      if (brandList == undefined || brandList.length == 0) {
        params = {
          category_id: category,
          brand_name: [],
        };
      } else if (typeof brandList === 'string') {
        var list = new Array();
        list.push(brandList);
        params = {
          category_id: category,
          brand_name: list,
        };
      } else {
        params = {
          category_id: category,
          brand_name: brandList,
        };
      }

      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/events/main/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/event_main/', params);

      switch (category) {
        case 1:
          setCategory('food');
          setFoodNextPage(res.data.next_page);
          setFoodEventList(res.data.event);
          break;
        case 2:
          setCategory('cafe');
          setCafeNextPage(res.data.next_page);
          setCafeEventList(res.data.event);
          break;
        case 3:
          setCategory('fashion');
          setFashionNextPage(res.data.next_page);
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
  const handleClickMore = async (nextPage, query) => {
    if (nextPage === -1) return;
    try {
      setError(null);
      //setLoading(true);
      //console.log(brandList);
      var params;
      var category = parseInt(query.category);
      let brandList = query.brands;

      var params;
      if (category != 1 && category != 2 && category != 3) {
        category = 1;
        params = {
          category_id: category,
          brand_name: [],
        };
      }

      if (brandList == undefined || brandList.length == 0) {
        params = {
          category_id: category,
          brand_name: [],
        };
      } else if (typeof brandList === 'string') {
        var list = new Array();
        list.push(brandList);
        params = {
          category_id: category,
          brand_name: list,
        };
      } else {
        params = {
          category_id: category,
          brand_name: brandList,
        };
      }

      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(
            API_BASE_URL + `/api/events/main/?page=${nextPage}`,
            params,
            {
              headers: {
                Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
              },
            }
          )
        : await axios.post(
            API_BASE_URL + `/api/guest/event_main/?page=${nextPage}`,
            params
          );

      const eventList = res.data.event;

      switch (category) {
        case 1:
          setFoodNextPage(res.data.next_page);
          setFoodEventList([...foodEventList, ...eventList]);

          break;
        case 2:
          setCafeNextPage(res.data.next_page);
          setCafeEventList([...cafeEventList, ...eventList]);
          cafeEventList.concat(res.data.event);
          break;
        case 3:
          setFashionNextPage(res.data.next_page);
          setFashionEventList([...fashionEventList, ...eventList]);
          fashionEventList.concat(res.data.event);
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
    //setLoading(false);
  };

  const filterReset = (category) => {
    switch (category) {
      case 'food':
        setFoodBrandList([]);
        break;
      case 'cafe':
        setCafeBrandList([]);
        break;
      case 'fashion':
        setFashionBrandList([]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // getEventList(1, []);
    // getEventList(2, []);
    // getEventList(3, []);
    getEventList(query);
  }, []);

  if (loading) return <LoadingScreen></LoadingScreen>;
  if (error) return <div>에러가 발생했습니다.</div>;
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
                filter={clickFoodFilterReset}
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
                filter={clickCafeFilterReset}
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
                filter={clickFashionFilterReset}
              ></FilterItem>
            );
          })}
        </S.FilterItemContainer>

        <S.ButtonContainer>
          <S.FilterResetButton
            visible={category === 'food'}
            onClick={(e) => {
              filterReset('food');
              setClickFoodFilterReset(true);
            }}
          >
            <img src={'/img/filter-reset-button.png'} />
            선택 초기화
          </S.FilterResetButton>
          <S.FilterResetButton
            visible={category === 'cafe'}
            onClick={(e) => {
              filterReset('cafe');
              setClickCafeFilterReset(true);
            }}
          >
            <img src={'/img/filter-reset-button.png'} />
            선택 초기화
          </S.FilterResetButton>
          <S.FilterResetButton
            visible={category === 'fashion'}
            onClick={(e) => {
              filterReset('fashion');
              setClickFashionFilterReset(true);
            }}
          >
            <img src={'/img/filter-reset-button.png'} />
            선택 초기화
          </S.FilterResetButton>
          <S.Button
            visible={category === 'food'}
            onClick={(e) => {
              var newRoute = '/event?category=1';
              for (var i = 0; i < foodBrandList.length; i++) {
                newRoute = newRoute + '&brands=' + foodBrandList[i];
              }
              window.location = newRoute;
            }}
            disabled={foodBrandList.length === 0}
          >
            적용
          </S.Button>

          <S.Button
            visible={category === 'cafe'}
            onClick={(e) => {
              var newRoute = '/event?category=2';
              for (var i = 0; i < cafeBrandList.length; i++) {
                newRoute = newRoute + '&brands=' + cafeBrandList[i];
              }
              window.location = newRoute;
            }}
            disabled={cafeBrandList.length === 0}
          >
            적용
          </S.Button>
          <S.Button
            visible={category === 'fashion'}
            onClick={(e) => {
              var newRoute = '/event?category=3';
              for (var i = 0; i < fashionBrandList.length; i++) {
                newRoute = newRoute + '&brands=' + fashionBrandList[i];
              }
              window.location = newRoute;
            }}
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
            onClick={(e) => {
              var newRoute = '/event?category=1';
              window.location = newRoute;
            }}
          >
            FOOD
          </CategoryTab>
          <CategoryTab
            id="cafe"
            selected={category === 'cafe'}
            onClick={(e) => {
              setCategory('cafe');
              var newRoute = '/event?category=2';
              window.location = newRoute;
            }}
          >
            CAFE
          </CategoryTab>
          <CategoryTab
            id="fashion"
            selected={category === 'fashion'}
            onClick={(e) => {
              setCategory('fashion');
              var newRoute = '/event?category=3';
              window.location = newRoute;
            }}
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
        <S.MoreButton
          visible={category === 'food' && foodNextPage !== -1}
          onClick={handleClickMore.bind(this, foodNextPage, query)}
        >
          <img src="/img/more-button-arrow.png"></img> MORE
        </S.MoreButton>
        <S.MoreButton
          visible={category === 'cafe' && cafeNextPage !== -1}
          onClick={handleClickMore.bind(this, cafeNextPage, query)}
        >
          <img src="/img/more-button-arrow.png"></img>
          MORE
        </S.MoreButton>
        <S.MoreButton
          visible={category === 'fashion' && fashionNextPage !== -1}
          onClick={handleClickMore.bind(this, fashionNextPage, query)}
        >
          <img src="/img/more-button-arrow.png"></img>
          MORE
        </S.MoreButton>
      </S.MainContainer>
      <Footer top={5}></Footer>
    </>
  );
};

export default EventPage;
