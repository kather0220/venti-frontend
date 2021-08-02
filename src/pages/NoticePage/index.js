import React from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import NoticeItem from '../../components/NoticeItem';
//import { PageTitle } from '../../common/PageTitle/styles';

function NoticePage() {
  return (
    <>
      <Header></Header>

      <S.MainContainer>
        <S.PageTitle>알림</S.PageTitle>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
        <NoticeItem></NoticeItem>
      </S.MainContainer>
    </>
  );
}

export default NoticePage;
