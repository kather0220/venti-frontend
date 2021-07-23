import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/index';
import * as S from './styles';

function SearchResult() {
  const { id } = useParams();
  return (
    <>
      <Header></Header>
      <S.ResultMessage>
        <keyword>{id}</keyword>에 대한 검색 결과입니다
      </S.ResultMessage>
    </>
  );
}

export default SearchResult;
