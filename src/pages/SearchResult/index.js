import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/index';
import * as S from './styles';
import { GridWrapper } from '../../common/GridWrapper/styles';
import Footer from '../../common/Footer';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
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
      const res = getToken(ACCESS_TOKEN)
        ? await axios.get(API_BASE_URL + `/api/search/?search=${input}`, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.get(API_BASE_URL + `/api/guest/search/?search=${input}`);

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
                    brandName={event.brand_name}
                    img={event.event_img_url}
                    // onClick={handleBrandImageClick}
                    subs={event.subs ? event.subs : false}
                    view={event.view}
                    due={event['d-day']}
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
      <Footer top={4.4}></Footer>
    </>
  );
}

export default SearchResult;
