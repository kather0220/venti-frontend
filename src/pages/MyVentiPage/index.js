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
import Footer from '../../common/Footer';
import LoadingScreen from '../../common/LoadingScreen';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function MyVentiPage() {
  const [category, setCategory] = useState('event');
  const [isVisible, setIsVisible] = useState(false);
  const [margin, setMargin] = useState('1.133');
  const [width, setWidth] = useState('2.933');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mybrands, setMyBrands] = useState([]);
  const [myOnEvent, setMyOnEvent] = useState([]);
  const [myOffEvent, setMyOffEvent] = useState([]);

  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'event':
        setCategory('event');
        setMargin('1.133');
        setWidth('2.933');
        break;
      case 'brand':
        setCategory('brand');
        setMargin('5.733');
        setWidth('3.133');
        break;

      default:
        break;
    }
  };
  // 로그인으로 이동시킨 후 다시 바로 MY VENTI로 오는 걸 구현하려면 여기서 history.back() 을 이용한 함수를 추가해야 함.
  const getMyEvents = async () => {
    const shiftToLogIn = () => {
      <S.NoResultMessage>로그인이 필요한 서비스입니다!</S.NoResultMessage>;
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

      setMyOnEvent(res.data.on_event);
      setMyOffEvent(res.data.off_event);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  const getMyBrands = async () => {
    const shiftToLogIn = () => {
      <S.NoResultMessage>로그인이 필요한 서비스입니다!</S.NoResultMessage>;
    };
    try {
      setError(null);
      setLoading(true);
      const res = getToken(ACCESS_TOKEN)
        ? await axios.get(API_BASE_URL + '/api/mybrands/users/', {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : shiftToLogIn();

      setMyBrands(res.data.mybrand);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getToken(ACCESS_TOKEN) ? getMyEvents() : <></>;
  }, []);
  useEffect(() => {
    getToken(ACCESS_TOKEN) ? getMyBrands() : <></>;
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <div>에러가 발생했습니다.</div>;
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
                  brandName={event.brand_name}
                  img={event.event_img_url}
                  view={event.view}
                  due={event['d-day']}
                  subs={true}
                  //clicked={true}
                ></GridItem>
              );
            })}

            {myOffEvent.map((event) => {
              return (
                <GridItem
                  isEnd={true}
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_name}
                  img={event.event_img_url}
                  view={event.view}
                  due={event.due}
                  subs={true}
                ></GridItem>
              );
            })}
          </GridWrapper>
        ) : getToken(ACCESS_TOKEN) ? (
          <S.NoResultMessage visible={category === 'event'}>
            선택된 이벤트가 없어요.<br></br> EVENT 탭에서 좋아하는 이벤트를
            선택해주세요!
          </S.NoResultMessage>
        ) : (
          <S.NoResultMessage visible={category === 'event'}>
            로그인이 필요한 서비스입니다.
          </S.NoResultMessage>
        )}
        {mybrands.length !== 0 ? (
          <BrandListContainer visible={category === 'brand'}>
            {mybrands.map((brand) => {
              return (
                <BrandListItem
                  id={brand.id}
                  name={brand.name}
                  image={brand.brand_logo_url}
                  subs={true}
                  //clicked={true}
                ></BrandListItem>
              );
            })}
          </BrandListContainer>
        ) : getToken(ACCESS_TOKEN) ? (
          <S.NoResultMessage visible={category === 'brand'}>
            선택된 브랜드가 없어요.<br></br> BRAND 탭에서 좋아하는 브랜드를
            선택해주세요!
          </S.NoResultMessage>
        ) : (
          <S.NoResultMessage visible={category === 'brand'}>
            로그인이 필요한 서비스입니다.
          </S.NoResultMessage>
        )}
      </S.MainContainer>
      <Footer top={4}></Footer>
    </>
  );
}

export default MyVentiPage;
