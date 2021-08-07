import React, { useState } from 'react';
import * as S from './styles';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function EventHeart(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [clicked, setClicked] = useState(props.subs);
  const handleHeartClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
    if (!clicked) {
      getToken(ACCESS_TOKEN) ? subscribeEvent(props.id) : <></>;
    } else {
      getToken(ACCESS_TOKEN) ? unsubscribeEvent(props.id) : <></>;
      //: alert('로그인이 필요한 서비스입니다.');
    }
  };

  const subscribeEvent = async (id) => {
    try {
      setError(null);
      //setLoading(true);
      const params = {
        event_id: id,
      };
      ///api/events/deadline/
      console.log(id);
      const res = await axios.post(API_BASE_URL + '/api/myevents/', params, {
        headers: {
          Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
        },
      });
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);

      console.log(res);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    //setLoading(false);
  };

  const unsubscribeEvent = async (id) => {
    try {
      setError(null);
      //setLoading(true);
      const params = {
        event_id: id,
      };
      ///api/events/deadline/

      const res = await axios.post(
        API_BASE_URL + '/api/myevents/unlike/',
        params,
        {
          headers: {
            Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
          },
        }
      );

      console.log(res);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    //setLoading(false);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <S.HeartIcon
      onClick={handleHeartClick}
      src={clicked ? '/img/clicked-heart.png' : '/img/heart.png'}
    ></S.HeartIcon>
  );
}

export default EventHeart;
