import * as S from './styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [searchInput, setSearchInput] = useState('');
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
      <Link to={'/'}>
        <S.StyledLogo>Venti</S.StyledLogo>
      </Link>
      <S.HamburgerButton src={'/img/hamburger-button.png'}></S.HamburgerButton>
      <Link to={'/notice'}>
        <S.AlarmButton src={'img/alarm-icon.png'}></S.AlarmButton>
      </Link>
      <S.SearchInputBox
        onChange={onChange}
        onKeyPress={(e) => (e.key === 'Enter' ? handleKeyPress() : <></>)}
      ></S.SearchInputBox>
      <S.SearchButton
        src={'/img/search-icon.png'}
        onClick={handleKeyPress}
      ></S.SearchButton>
    </S.StyledHeader>
  );
}

export default Header;
