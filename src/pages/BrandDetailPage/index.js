import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';

import Footer from '../../common/Footer/index';
import * as S from './styles';
import { API_BASE_URL } from '../../constants';
import axios from 'axios';

function BrandDetailPage() {
  const { brand_id } = useParams();
  console.log(brand_id);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [brandInfo, setBrandInfo] = useState('');
  const [onEvent, setOnEvent] = useState([]);
  const [offEvent, setOffEvent] = useState([]);

  const handleStarClick = (e) => {
    e.preventDefault();
    //setClicked(!clicked);

    setClicked(!clicked);
    if (!clicked) {
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);
    }
    //alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
  };
  const getBrandDetail = async (id) => {
    //console.log(brand_id);
    try {
      setError(null);
      setLoading(true);
      //console.log(headers);
      //const date = new Date();
      //console.log(date);
      const params = {
        brand_id: id,
      };
      const res = await axios.post(
        API_BASE_URL + '/api/guest/brand_detail/',
        params
      );

      console.log(res.data);
      setBrandInfo(res.data.brand[0]);
      //setResponse(res.data.event);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  const getBrandEventList = async (id) => {
    //console.log(brand_id);
    try {
      setError(null);
      setLoading(true);
      //console.log(headers);
      //const date = new Date();
      //console.log(date);
      const params = {
        brand_id: id,
      };
      const res = await axios.post(
        API_BASE_URL + '/api/guest/event_deadline/',
        params
      );

      console.log(res.data);
      //setBrandInfo(res.data.brand[0]);
      //setResponse(res.data.event);
      setOnEvent(res.data.on_event);
      setOffEvent(res.data.off_event);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  ///api/brands/{id}/

  useEffect(() => {
    getBrandDetail(brand_id);
    getBrandEventList(brand_id);
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.BrandProfileBox>
          <S.BrandImage src={brandInfo.image}></S.BrandImage>
          <S.BrandNameAndText>
            <span>{brandInfo.name}</span>
            <img
              onClick={handleStarClick}
              src={
                clicked
                  ? '/img/filled-star-edit.png'
                  : '/img/empty-star-edit.png'
              }
            ></img>
            <br></br>
            <text>{brandInfo.text}</text>
          </S.BrandNameAndText>
        </S.BrandProfileBox>
        <S.EventExp>
          진행중인 이벤트<br></br>
          <text>내일은 없을지도 몰라요</text>
        </S.EventExp>
        <GridWrapper visible={true}>
          {onEvent.map((event) => {
            return (
              <GridItem
                id={event.id}
                eventName={event.name}
                brandName={event.brand_id}
                img={event.image}
                // onClick={handleBrandImageClick}
                view={event.view}
                due={event.due}
              ></GridItem>
            );
          })}
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
                brandName={event.brand_id}
                img={event.image}
                // onClick={handleBrandImageClick}
                view={event.view}
                due={event.due}
              ></GridItem>
            );
          })}
        </GridWrapper>
        <Footer></Footer>
      </S.MainContainer>
    </>
  );
}

export default BrandDetailPage;
