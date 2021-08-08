import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../common/Header/index';
import Carousel from '../../components/Carousel/index';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import CategoryUnderLine from '../../common/CategoryUnderLine/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import GridItem from '../../common/GridItem/index';
import Footer from '../../common/Footer/index';
import LoadingScreen from '../../common/LoadingScreen';
import * as S from './styles';

function MainPage() {
  const [category, setCategory] = useState('food');
  const [margin, setMargin] = useState('1.067');
  const [width, setWidth] = useState('2.457');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foodEventList, setFoodEventList] = useState([]);
  const [cafeEventList, setCafeEventList] = useState([]);
  const [fashionEventList, setFashionEventList] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'food':
        setCategory('food');
        setMargin('1.067');
        setWidth('2.457');
        break;
      case 'cafe':
        setCategory('cafe');

        setMargin('6.3');
        setWidth('2.457');
        break;
      case 'fashion':
        setCategory('fashion');
        setMargin('11.3');
        setWidth('4.233');
        break;
      default:
        break;
    }
  };
  const getEventsForYou = async (category) => {
    try {
      setError(null);
      setLoading(true);
      const params = {
        category_id: category,
        brand_name: [],
      };
      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/eventforyou/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/event_main/', params);

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
  const getWeekly = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.get(API_BASE_URL + '/api/weekly/');

      console.log(res.data);
      setWeekly(res.data.result);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  ///api/brands/{id}/

  useEffect(() => {
    getEventsForYou(1);
    getEventsForYou(2);
    getEventsForYou(3);
    getWeekly();
  }, []);
  if (loading) return <LoadingScreen />;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <S.MainContainer>
        <Header></Header>
        <Carousel weekly_list={weekly}></Carousel>
        <S.Exp>나를 위한 새로운 이벤트</S.Exp>
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
        </CategoryWrapper>
        <CategoryUnderLine margin={margin} width={width}></CategoryUnderLine>
        <GridWrapper visible={category === 'food'}>
          {foodEventList.map((event) => {
            return (
              <GridItem
                id={event.id}
                eventName={event.name}
                brandName={event.brand_name}
                img={event.event_img_url}
                // onClick={handleBrandImageClick}
                subs={event.subs ? event.subs : false}
                view={event.view}
                due={event['d-day']}
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
                brandName={event.brand_name}
                img={event.event_img_url}
                subs={event.subs ? event.subs : false}
                // onClick={handleBrandImageClick}
                view={event.view}
                due={event['d-day']}
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
                brandName={event.brand_name}
                img={event.event_img_url}
                // onClick={handleBrandImageClick}
                subs={event.subs ? event.subs : false}
                view={event.view}
                due={event['d-day']}
              ></GridItem>
            );
          })}
        </GridWrapper>
        <Footer top={8}></Footer>
      </S.MainContainer>
    </>
  );
}

export default MainPage;
