import * as S from './styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  const onChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  const handleKeyPress = () => {
    if (searchInput === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    console.log(searchInput); // 검색 결과 추가 예정
  };
  return (
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
        ></S.HamburgerButton>
        <S.AlarmButton
          src={'img/alarm-icon.png'}
          onClick={() => {
            history.push('/notice');
          }}
        ></S.AlarmButton>
      </S.FirstRow>
      <S.SecondRow>
        <S.SearchInputBox
          onChange={onChange}
          onKeyPress={(e) => (e.key === 'Enter' ? handleKeyPress() : <></>)}
        ></S.SearchInputBox>
        <S.SearchButton
          src={'/img/search-icon.png'}
          onClick={handleKeyPress}
        ></S.SearchButton>
      </S.SecondRow>
    </S.StyledHeader>
  );
}

export default Header;
