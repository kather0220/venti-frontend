import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function BrandListItem(props) {
  const history = useHistory();
  const brand_id = props.id; // 임시값
  console.log(brand_id);
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/brand-detail/${brand_id}`);
  };
  const handleStarClick = (e) => {
    e.preventDefault();
    //setClicked(!clicked);

    setClicked(!clicked);
    if (!clicked) {
      setTimeout(function () {
        alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
      }, 100);
    }
    //alert('좋아요가 등록되었습니다. 마이벤티 페이지에서 확인해주세요.');
  };
  return (
    <S.ListItemBox>
      <S.NameAndImage onClick={handleClick}>
        <S.BrandImage src={props.image}></S.BrandImage>
        <S.BrandName>{props.name}</S.BrandName>
      </S.NameAndImage>
      <S.Star
        onClick={handleStarClick}
        src={clicked ? 'img/filled-star.png' : 'img/empty-star.png'}
      ></S.Star>
    </S.ListItemBox>
  );
}

export default BrandListItem;
