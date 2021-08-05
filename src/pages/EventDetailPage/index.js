import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../common/Header/index';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import * as S from './styles';
import axios from 'axios';

function EventDetailPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [eventInfo, setEventInfo] = useState('');
  const { event_id } = useParams();
  const handleHeartClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
    if (!clicked) {
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);
    }
  };
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
      console.log(res.data);
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
  const [clicked, setClicked] = useState(
    eventInfo.subs ? eventInfo.subs : false
  );
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.EvenInfoWrapper>
          <S.BrandNameAndDate>
            <brand>{eventInfo.brand_name}</brand>
            <br></br>
            {eventInfo.created_date}
          </S.BrandNameAndDate>
          <S.EventName>{eventInfo.name}</S.EventName>
          <S.HeartIcon
            onClick={handleHeartClick}
            src={clicked ? '/img/clicked-heart.png' : '/img/heart.png'}
          ></S.HeartIcon>
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
    </>
  );
}

export default EventDetailPage;
