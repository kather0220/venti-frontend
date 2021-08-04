import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import CategoryUnderLine from '../../common/CategoryUnderLine/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';
import { BrandListContainer } from '../../common/BrandListContainer/styles';
import BrandListItem from '../../common/BrandListItem/index';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function MyVentiPage() {
  const [category, setCategory] = useState('event');
  const [isVisible, setIsVisible] = useState(false);
  const [margin, setMargin] = useState('1.067');
  const [width, setWidth] = useState('2.783');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mybrands, setMyBrands] = useState([]);
  const [myOnEvent, setMyOnEvent] = useState([]);
  const [myOffEvent, setMyOffEvent] = useState([]);
  const history = useHistory();

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
  // 로그인으로 이동시킨 후 다시 바로 MY VENTI로 오는 걸 구현하려면 여기서 history.back() 을 이용한 함수를 추가해야 함.
  const getMyEvents = async () => {
    const shiftToLogIn = () => {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/log-in');
    };
    try {
      setError(null);
      setLoading(true);
      const res = getToken(ACCESS_TOKEN)
        ? await axios.get(API_BASE_URL + '/api/myevents/users/', {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : shiftToLogIn();

      console.log(res.data);
      setMyOnEvent(res.data.on_event);
      setMyOffEvent(res.data.off_event);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getMyEvents();
    // getMyBrands();
  }, []);
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

        {myOnEvent.length !== 0 || myOffEvent.length !== 0 ? (
          <GridWrapper visible={category === 'event'}>
            {myOnEvent.map((event) => {
              return (
                <GridItem
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_id}
                  img={event.image}
                  view={event.view}
                  due={event.due}
                ></GridItem>
              );
            })}

            {myOffEvent.map((event) => {
              return (
                <GridItem
                  isEnd={true}
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_id}
                  img={event.image}
                  view={event.view}
                  due={event.due}
                ></GridItem>
              );
            })}
          </GridWrapper>
        ) : (
          <S.NoEventMessage visible={category === 'event'}>
            선택된 이벤트가 없어요.<br></br> EVENT 탭에서 좋아하는 이벤트를
            선택해주세요!
          </S.NoEventMessage>
        )}
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
