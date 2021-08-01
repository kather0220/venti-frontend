import React, { useState } from 'react';
import Header from '../../common/Header/index';
import { GridWrapper } from '../../common/GridWrapper/styles';
import GridItem from '../../common/GridItem/index';

import Footer from '../../common/Footer/index';
import * as S from './styles';

function BrandDetailPage() {
  const [clicked, setClicked] = useState(false);
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
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.BrandProfileBox>
          <S.BrandImage
            src={'/img/brand-preference-page-img/vips-circle-img.png'}
          ></S.BrandImage>
          <S.BrandNameAndText>
            <span>VIPS</span>
            <img
              onClick={handleStarClick}
              src={
                clicked
                  ? '/img/filled-star-edit.png'
                  : '/img/empty-star-edit.png'
              }
            ></img>
            <br></br>
            <text>My No.1 Steakhouse Vips Steak & Sallad Bar.</text>
          </S.BrandNameAndText>
        </S.BrandProfileBox>
        <S.EventExp>
          진행중인 이벤트<br></br>
          <text>내일은 없을지도 몰라요</text>
        </S.EventExp>
        <GridWrapper visible={true}>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridWrapper>
        <S.EventExp>
          지난 이벤트<br></br>
          <text>아쉽지만 다음에 만나요..</text>
        </S.EventExp>
        <GridWrapper visible={true}>
          <GridItem isEnd={true}></GridItem>
          <GridItem isEnd={true}></GridItem>
        </GridWrapper>
        <Footer></Footer>
      </S.MainContainer>
    </>
  );
}

export default BrandDetailPage;
