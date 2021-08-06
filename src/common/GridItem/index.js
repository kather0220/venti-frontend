import * as S from './styles';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function GridItem(props) {
  const history = useHistory();
  const [clicked, setClicked] = useState(props.subs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const event_id = props.id; // 임시값. 서버에서 넘겨 받을 예정
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/event-detail/${event_id}`);
  };
  const handleHeartClick = (e) => {
    e.preventDefault();
    //setClicked(!clicked);

    setClicked(!clicked);
    if (!clicked) {
      getToken(ACCESS_TOKEN) ? subscribeEvent(event_id) : <></>;
      //: alert('로그인이 필요한 서비스입니다.');
      /*
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);
      */
    } else {
      getToken(ACCESS_TOKEN) ? unsubscribeEvent(event_id) : <></>;
      //: alert('로그인이 필요한 서비스입니다.');
    }
  };
  //alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');

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

  /*
  useEffect(() => {
    if (clicked)
      alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
  }, [clicked]);
  */
  return (
    <>
      <S.GridItemContainer>
        <S.GridInnerContainer>
          <S.GridOverlay visible={props.isEnd}></S.GridOverlay>
        </S.GridInnerContainer>
        <S.GridInnerContainer>
          <S.GridImage src={props.img} onClick={handleClick} />
          <S.FirstRow>
            <S.EventName end={props.isEnd}>{props.eventName}</S.EventName>
            {props.isEnd ? (
              <S.HeartIcon src={'/img/disabled-heart.png'} />
            ) : (
              <S.HeartIcon
                src={clicked ? '/img/clicked-heart.png' : '/img/heart.png'}
                onClick={handleHeartClick}
              />
            )}
          </S.FirstRow>
          <S.SecondRow end={props.isEnd}>{props.brandName}</S.SecondRow>
          <S.ThirdRow>
            {props.isEnd ? '마감' : 'D - ' + props.due}
            {'     '}조회 {props.view}회
          </S.ThirdRow>
        </S.GridInnerContainer>
      </S.GridItemContainer>
    </>
  );
}

export default GridItem;
