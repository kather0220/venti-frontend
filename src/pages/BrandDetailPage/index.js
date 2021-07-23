import React from 'react';
import Header from '../../common/Header/index';
import GridWrapper from '../../common/GridWrapper/index';
import Footer from '../../common/Footer/index';
import * as S from './styles';

function BrandDetailPage() {
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
            <img src="/img/filled-star-edit.png"></img>
            <br></br>
            <text>My No.1 Steakhouse Vips Steak & Sallad Bar.</text>
          </S.BrandNameAndText>
        </S.BrandProfileBox>
        <S.EventExp>
          진행중인 이벤트<br></br>
          <text>내일은 없을지도 몰라요</text>
        </S.EventExp>
        <GridWrapper visible={true}></GridWrapper>
        <S.EventExp>
          지난 이벤트<br></br>
          <text>아쉽지만 다음에 만나요..</text>
        </S.EventExp>
        <GridWrapper visible={true}></GridWrapper>
        <Footer></Footer>
      </S.MainContainer>
    </>
  );
}

export default BrandDetailPage;
