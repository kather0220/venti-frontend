import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/index';
import * as S from './styles';

function SearchResult() {
  const { id } = useParams();
  const search_result = null;
  // 검색결과 get으로 불러올 예정
  return (
    <>
      <Header searchInput={id}></Header>
      <S.MainContainer>
        {search_result ? (
          <S.ResultMessage>
            <keyword>{id}</keyword>에 대한 검색 결과입니다
          </S.ResultMessage>
        ) : (
          <S.ResultMessage>
            <keyword>{id}</keyword>에 대한 검색 결과가 없어요.<br></br>
            검색어를 다시 확인해주세요!
          </S.ResultMessage>
        )}
      </S.MainContainer>
    </>
  );
}

export default SearchResult;
