import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';
import Footer from '../../common/Footer/index';
import LoadingScreen from '../../common/LoadingScreen';
import * as S from './styles';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';
import BrandStar from '../../common/BrandStar';

function BrandDetailPage() {
  const { brand_id } = useParams();
  console.log(brand_id);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [brandInfo, setBrandInfo] = useState('');
  const [onEvent, setOnEvent] = useState([]);
  const [offEvent, setOffEvent] = useState([]);

  const getBrandDetail = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const params = {
        brand_id: id,
      };

      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/brands/details/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/brand_detail/', params);

      setBrandInfo(res.data.brand);

      setClicked(res.data.brand.subs);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  const getBrandEventList = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const params = {
        brand_id: id,
      };

      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/events/deadline/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/event_deadline/', params);

      setOnEvent(res.data.on_event);
      setOffEvent(res.data.off_event);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBrandEventList(brand_id);
    getBrandDetail(brand_id);
  }, []);
  if (loading) return <LoadingScreen />;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.BrandProfileBox>
          <S.BrandImage src={brandInfo.brand_logo_url}></S.BrandImage>
          <S.BrandNameAndText>
            <span>{brandInfo.name}</span>
            <BrandStar
              id={brandInfo.id}
              setClicked={setClicked}
              clicked={clicked}
            ></BrandStar>
            <br></br>
            <text>{brandInfo.text}</text>
          </S.BrandNameAndText>
        </S.BrandProfileBox>
        <S.EventExp>
          진행중인 이벤트<br></br>
          <text>내일은 없을지도 몰라요</text>
        </S.EventExp>
        <GridWrapper visible={true}>
          {onEvent.length !== 0 ? (
            onEvent.map((event) => {
              return (
                <GridItem
                  id={event.id}
                  eventName={event.name}
                  brandName={event.brand_name}
                  img={event.event_img_url}
                  view={event.view}
                  subs={event.subs}
                  due={event['d-day']}
                ></GridItem>
              );
            })
          ) : (
            <S.MarginBox>진행중인 이벤트가 없어요!</S.MarginBox>
          )}
        </GridWrapper>
        <S.EventExp>
          지난 이벤트<br></br>
          <text>아쉽지만 다음에 만나요..</text>
        </S.EventExp>
        <GridWrapper visible={true}>
          {offEvent.map((event) => {
            return (
              <GridItem
                id={event.id}
                eventName={event.name}
                brandName={event.brand_name}
                img={event.event_img_url}
                view={event.view}
                due={event['d-day']}
                subs={event.subs}
                isEnd={true}
              ></GridItem>
            );
          })}
        </GridWrapper>
        <Footer top={2}></Footer>
      </S.MainContainer>
    </>
  );
}

export default BrandDetailPage;
