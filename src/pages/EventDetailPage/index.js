import React from 'react';
import Header from '../../common/Header/index';
import Button from '../../common/Button/index';
import * as S from './styles';

function EventDetailPage() {
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.EvenInfoWrapper>
          <S.BrandNameAndDate>
            <brand>버거킹</brand>
            <br></br>2020.09.09
          </S.BrandNameAndDate>
          <S.EventName>6월 와퍼 할인 이벤트</S.EventName>
          <S.HeartIcon src={'/img/heart.png'}></S.HeartIcon>
        </S.EvenInfoWrapper>
        <S.EventImage src={'/img/event-detail-example.png'}></S.EventImage>
        <S.EventText>
          1. 행사명 : 와퍼 3500원 <br></br>2. 제품 : 와퍼(3500원), 치즈와퍼
          (4100원) <br></br>3. 행사 기간 : 21년 6월 12일(월) ~ 6월 18일(일),
          7일간 <br></br>4. 행사 시간 : 매장 운영시간에 따라 상이 합니다.{' '}
          <br></br>
          <notice>
            *유의사항과 제외매장은 이벤트 바로가기를 통해 확인하세요
          </notice>
        </S.EventText>
        <Button>이벤트 바로가기</Button>
      </S.MainContainer>
    </>
  );
}

export default EventDetailPage;
