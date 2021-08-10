import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../common/Header/index';
import EventHeart from '../../common/EventHeart';
import Footer from '../../common/Footer';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import LoadingScreen from '../../common/LoadingScreen';
import * as S from './styles';
import axios from 'axios';

function EventDetailPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [eventInfo, setEventInfo] = useState('');
  const { event_id } = useParams();

  const getEventDetail = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const params = {
        event_id: id,
      };
      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/events/details/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/event_detail/', params);

      setEventInfo(res.data.event[0]);
    } catch (e) {
      console.log(e);
      setError(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    getEventDetail(event_id);
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.EventName>{eventInfo.name}</S.EventName>
        <S.EvenInfoWrapper>
          <S.BrandNameAndDate>
            <brand>{eventInfo.brand_name}</brand>
            <br></br>
            {eventInfo.due} 마감
          </S.BrandNameAndDate>

          <EventHeart
            id={eventInfo.id}
            subs={eventInfo.subs ? eventInfo.subs : false}
          ></EventHeart>
        </S.EvenInfoWrapper>
        <S.EventImage src={eventInfo.event_img_url}></S.EventImage>
        <S.EventText>{eventInfo.text}</S.EventText>
        <Link
          to={{
            pathname: eventInfo.url,
          }}
          target="_blank"
        >
          <S.Button>이벤트 바로가기</S.Button>
        </Link>
      </S.MainContainer>
      <Footer top={2}></Footer>
    </>
  );
}

export default EventDetailPage;
