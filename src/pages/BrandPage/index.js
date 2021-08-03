import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryUnderLine } from '../../common/CategoryUnderLine/styles';
import BrandListItem from '../../common/BrandListItem/index';
import { API_BASE_URL } from '../../constants';
import Footer from '../../common/Footer';
import axios from 'axios';

function BrandPage() {
  const [category, setCategory] = useState('food');
  const [foodBrandList, setFoodBrandList] = useState([]);
  const [cafeBrandList, setCafeBrandList] = useState([]);
  const [fashionBrandList, setFashionBrandList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    switch (id) {
      case 'food':
        setCategory('food');
        break;
      case 'cafe':
        setCategory('cafe');
        break;
      case 'fashion':
        setCategory('fashion');
        break;
      default:
        break;
    }
  };
  const getBrands = async (category) => {
    try {
      setError(null);
      setLoading(true);
      //console.log(headers);
      //const date = new Date();
      //console.log(date);
      const params = {
        category_id: category,
      };
      const res = await axios.post(
        API_BASE_URL + '/api/guest/brand_main/',
        params
      );

      console.log(res.data);
      //setResponse(res.data.event);
      switch (category) {
        case 1:
          setFoodBrandList(res.data.brand);
          break;
        case 2:
          setCafeBrandList(res.data.brand);
          break;
        case 3:
          setFashionBrandList(res.data.brand);
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  ///api/brands/{id}/

  useEffect(() => {
    getBrands(1);
    getBrands(2);
    getBrands(3);
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <PageTitle>BRAND</PageTitle>
        <CategoryWrapper>
          <CategoryTab
            id="food"
            selected={category === 'food'}
            onClick={handleClick}
          >
            FOOD
          </CategoryTab>
          <CategoryTab
            id="cafe"
            selected={category === 'cafe'}
            onClick={handleClick}
          >
            CAFE
          </CategoryTab>
          <CategoryTab
            id="fashion"
            selected={category === 'fashion'}
            onClick={handleClick}
          >
            FASHION
          </CategoryTab>
        </CategoryWrapper>
        <CategoryUnderLine></CategoryUnderLine>
        <S.BrandConatiner visible={category === 'food'}>
          {foodBrandList.map((brand) => {
            return (
              <BrandListItem
                name={brand.name}
                image={brand.image}
              ></BrandListItem>
            );
          })}
        </S.BrandConatiner>
        <S.BrandConatiner visible={category === 'cafe'}>
          {cafeBrandList.map((brand) => {
            return (
              <BrandListItem
                name={brand.name}
                image={brand.image}
              ></BrandListItem>
            );
          })}
        </S.BrandConatiner>
        <S.BrandConatiner visible={category === 'fashion'}>
          {fashionBrandList.map((brand) => {
            return (
              <BrandListItem
                name={brand.name}
                image={brand.image}
              ></BrandListItem>
            );
          })}
        </S.BrandConatiner>
      </S.MainContainer>
      <Footer></Footer>
    </>
  );
}

export default BrandPage;
