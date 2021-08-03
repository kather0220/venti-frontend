import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/index';
import * as S from './styles';
import { GridWrapper } from '../../common/GridWrapper/styles';
import { API_BASE_URL } from '../../constants';
import GridItem from '../../common/GridItem/index';
import axios from 'axios';

function SearchResult() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  //api/search/
  const getSearchResult = async (input) => {
    console.log(input);
    try {
      setError(null);
      setLoading(true);
      const url = API_BASE_URL + `/api/search/?search=${input}`;
      console.log(url);
      const res = await axios.get(url);

      console.log(res.data);
      setSearchResult(res.data.events);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getSearchResult(id);
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <Header searchInput={id}></Header>
      <S.MainContainer>
        {searchResult.length !== 0 ? (
          <>
            <S.ResultMessage>
              <keyword>{id}</keyword>에 대한 검색 결과입니다
            </S.ResultMessage>
            <S.ResultTitle>EVENT ({searchResult.length}건)</S.ResultTitle>
            <GridWrapper visible={true}>
              {searchResult.map((event) => {
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
          </>
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
