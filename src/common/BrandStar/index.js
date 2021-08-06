import React, { useState } from 'react';
import * as S from './styles';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function BrandStar(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [clicked, setClicked] = useState(props.subs);
  const handleStarClick = (e) => {
    e.preventDefault();
    //setClicked(!clicked);

    setClicked(!clicked);
    if (!clicked) {
      getToken(ACCESS_TOKEN) ? subscribeBrand(props.id) : <></>;
      //: alert('로그인이 필요한 서비스입니다.');
      /*
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);
      */
    } else {
      getToken(ACCESS_TOKEN) ? unsubscribeBrand(props.id) : <></>;
    }
  };
  const subscribeBrand = async (id) => {
    try {
      setError(null);

      const params = {
        brand_id: [id],
      };
      ///api/events/deadline/
      console.log(id);
      const res = await axios.post(
        API_BASE_URL + '/api/guest/mybrands/',
        params,
        {
          headers: {
            Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
          },
        }
      );
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);

      console.log(res);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  const unsubscribeBrand = async (id) => {
    try {
      setError(null);

      const params = {
        brand_id: id,
      };
      ///api/events/deadline/

      const res = await axios.post(
        API_BASE_URL + '/api/mybrands/unlike/',
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
  };
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <S.StarIcon
      onClick={handleStarClick}
      src={clicked ? '/img/filled-star-edit.png' : '/img/empty-star-edit.png'}
    ></S.StarIcon>
  );
}

export default BrandStar;
