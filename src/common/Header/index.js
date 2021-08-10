import * as S from './styles';
import SearchInput from '../SearchInput/index';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MenuBar from '../MenuBar/index';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen';

function Header(props) {
  const [searchInput, setSearchInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [notiState, setNotiState] = useState(false);
  const [userNickname, setUserNickname] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  let id;
  const onChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleKeyPress = () => {
    if (searchInput === '') {
      alert('검색어를 입력해주세요.');
      return;
    } else {
      id = searchInput;
      window.location = `/search-result/${id}`;
    }
  };
  const getUserInfo = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await axios.get(API_BASE_URL + '/accounts/user/', {
        headers: {
          Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
        },
      });

      setUserNickname(res.data.nickname);
      setNotiState(res.data.noti_state);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (getToken(ACCESS_TOKEN)) {
      getUserInfo();
    }
  }, []);
  if (loading) return <LoadingScreen></LoadingScreen>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <S.BlackOverlay
        visible={isVisible}
        onClick={() => setIsVisible(false)}
      ></S.BlackOverlay>
      <MenuBar visible={isVisible} nickname={userNickname}></MenuBar>
      <S.StyledHeader>
        <S.FirstRow>
          <S.StyledLogo
            src={'/img/Venti.png'}
            onClick={() => {
              history.push('/');
            }}
          ></S.StyledLogo>
          <S.HamburgerButton
            src={'/img/hamburger-button.png'}
            onClick={() => setIsVisible(true)}
          ></S.HamburgerButton>
          <S.AlarmButton
            src={'/img/alarm-icon.png'}
            onClick={() => {
              history.push('/notice');
            }}
          ></S.AlarmButton>
          <S.AlarmNumber visible={notiState}>N</S.AlarmNumber>
        </S.FirstRow>
        <S.SecondRow>
          <S.SearchInputBox
            onChange={onChange}
            onKeyPress={(e) => (e.key === 'Enter' ? handleKeyPress() : <></>)}
            placeholder="이벤트 또는 브랜드를 검색해보세요"
            defaultValue={props.searchInput || ''}
          ></S.SearchInputBox>
          <S.SearchButton
            src={'/img/search-icon.png'}
            onClick={handleKeyPress}
          ></S.SearchButton>
        </S.SecondRow>
      </S.StyledHeader>
    </>
  );
}

export default Header;
