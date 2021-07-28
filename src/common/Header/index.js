import * as S from './styles';
import SearchInput from '../SearchInput/index';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuBar from '../MenuBar/index';

function Header(props) {
  const [searchInput, setSearchInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
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
      console.log(id);
      history.push(`/search-result/${id}`);
    }
  };
  return (
    <>
      <S.BlackOverlay
        visible={isVisible}
        onClick={() => setIsVisible(false)}
      ></S.BlackOverlay>
      <MenuBar visible={isVisible}></MenuBar>
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
