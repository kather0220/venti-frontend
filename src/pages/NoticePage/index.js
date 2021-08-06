import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import NoticeItem from '../../components/NoticeItem';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';
//import { PageTitle } from '../../common/PageTitle/styles';

function NoticePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState([]);
  const getNotice = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.get(API_BASE_URL + '/api/notifications/users/', {
        headers: {
          Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
        },
      });

      console.log(res.data);
      setResponse(res.data.result);
      //console.log(response);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNotice();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.PageTitle>알림</S.PageTitle>
        {response.map((result) => {
          return (
            <NoticeItem
              event_id={result.event_id}
              brand_name={result.brand_name}
              event_name={result.event_name}
              brand_img={result.brand_img}
              type={result.notice_type}
              time={result.noti_time}
            ></NoticeItem>
          );
        })}
      </S.MainContainer>
    </>
  );
}

export default NoticePage;
