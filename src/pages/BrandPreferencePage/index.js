import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles';
import PreferenceItem from '../../components/PreferenceItem/index';
import FoodBrandList from '../../data/FoodBrandList';
import { API_BASE_URL } from '../../constants';

function BrandPreferencePage() {
  //var brandList = [];
  //const clicked = false;
  const [brandList, setBrandList] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [response, setResponse] = useState([]);
  const [response, setResponse] = useState([]);
  const handleBrandImageClick = (e) => {
    if (brandList.includes(e.target.id)) {
      console.log('중복');
      setBrandList(brandList.filter((element) => element !== e.target.id));
      console.log(brandList.length);
    } else {
      setBrandList([...brandList, e.target.id]);
    }
    //e.target.isClicked = e.target.isClicked === true ? false : true;
    console.log(brandList);
    console.log(e.target.isClicked);
  };
  const getJWT = (key) => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    //const now = new Date();

    //if (now.getTime() > item.expiry) {
    // localStorage.removeItem(key);
    // return null;
    //}
    return item.value;
  };
  const handleClickButton = () => {
    // post 추가 예정
    alert('선호 브랜드 등록이 완료되었습니다!');
    history.push('/log-in');
  };
  const getBrands = async () => {
    try {
      setError(null);
      setLoading(true);
      //console.log(headers);
      const res = await axios.get(API_BASE_URL + '/api/guest/brand_list/');

      console.log(res.data);
      setResponse(res.data.brand);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getBrands();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  console.log(response);
  return (
    <S.MainContainer>
      <S.Exp>
        <name>이벤티</name>님이<br></br>선호하시는 브랜드를 알려주세요
        <br></br>
        <text>선택한 브랜드의 이벤트를 알림으로 받을 수 있어요</text>
      </S.Exp>
      <S.GridWrapper>
        {response.map((brand) => {
          return (
            <PreferenceItem
              id={brand.name}
              name={brand.name}
              img={'http://3.36.127.126:8000/' + brand.image}
              onClick={handleBrandImageClick}
            ></PreferenceItem>
          );
        })}
      </S.GridWrapper>
      <S.OpacityBox />
      <S.SelectButton
        disabled={brandList.length === 0}
        onClick={handleClickButton}
      >
        선택완료
      </S.SelectButton>
    </S.MainContainer>
  );
}

export default BrandPreferencePage;
