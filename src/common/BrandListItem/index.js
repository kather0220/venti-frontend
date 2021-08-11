import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';
import * as S from './styles';

function BrandListItem(props) {
  const history = useHistory();
  const brand_id = props.id; // 임시값

  const [clicked, setClicked] = useState(props.subs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/brand-detail/${brand_id}`);
  };
  const handleStarClick = (e) => {
    e.preventDefault();

    if (!clicked) {
      if (getToken(ACCESS_TOKEN)) {
        setClicked(!clicked);
        subscribeBrand(brand_id);
      } else {
        alert('로그인이 필요한 서비스입니다.');
        return;
      }
    } else {
      if (getToken(ACCESS_TOKEN)) {
        setClicked(!clicked);
        unsubscribeBrand(brand_id);
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
    <S.ListItemBox>
      <S.NameAndImage onClick={handleClick}>
        <S.BrandImage src={props.image}></S.BrandImage>
        <S.BrandName>{props.name}</S.BrandName>
      </S.NameAndImage>
      <S.Star
        onClick={handleStarClick}
        src={
          clicked || props.clicked
            ? 'img/filled-star.png'
            : 'img/empty-star.png'
        }
      ></S.Star>
    </S.ListItemBox>
  );
}

export default BrandListItem;
