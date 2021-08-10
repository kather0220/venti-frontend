import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';

function BrandStar(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isStar, setIsStar] = useState(false);
  //const [clicked, setClicked] = useState(true);
  const handleStarClick = (e) => {
    e.preventDefault();

    if (!props.clicked) {
      if (getToken(ACCESS_TOKEN)) {
        props.setClicked(!props.clicked);
        subscribeBrand(props.id);
      } else {
        alert('로그인이 필요한 서비스입니다.');
        return;
      }
    } else {
      if (getToken(ACCESS_TOKEN)) {
        props.setClicked(!props.clicked);
        unsubscribeBrand(props.id);
      }
    }
  };

  const subscribeBrand = async (id) => {
    try {
      setError(null);

      const params = {
        brand_id: [id],
      };

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
        alert('좋아요가 등록되었습니다. MY VENTI 페이지에서 확인해주세요.');
      }, 100);
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

      const res = await axios.post(
        API_BASE_URL + '/api/mybrands/unlike/',
        params,
        {
          headers: {
            Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
          },
        }
      );
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
      src={
        props.clicked ? '/img/filled-star-edit.png' : '/img/empty-star-edit.png'
      }
    ></S.StarIcon>
  );
}

export default BrandStar;
