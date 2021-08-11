import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import { PageTitle } from '../../common/PageTitle/styles';
import { CategoryWrapper } from '../../common/CategoryWrapper/styles';
import { CategoryTab } from '../../common/CategoryTab/styles';
import { CategoryUnderLine } from '../../common/CategoryUnderLine/styles';
import BrandListItem from '../../common/BrandListItem/index';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import Footer from '../../common/Footer';
import LoadingScreen from '../../common/LoadingScreen';
import queryString from 'query-string';
import axios from 'axios';

function BrandPage({ location }) {
  const query = queryString.parse(location.search);
  console.log(query);
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
  const getBrands = async (query) => {
    var category = parseInt(query.category);
    console.log(category);
    var params;
    if (category != 1 && category != 2 && category != 3) {
      category = 1;
      params = {
        category_id: category,
      };
    } else {
      params = {
        category_id: category,
      };
    }
    try {
      setError(null);
      setLoading(true);
      /*
      const params = {
        category_id: category,
      };
*/
      const res = getToken(ACCESS_TOKEN)
        ? await axios.post(API_BASE_URL + '/api/brands/main/', params, {
            headers: {
              Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
            },
          })
        : await axios.post(API_BASE_URL + '/api/guest/brand_main/', params);

      switch (category) {
        case 1:
          setCategory('food');
          setFoodBrandList(res.data.brand);
          break;
        case 2:
          setCategory('cafe');
          setCafeBrandList(res.data.brand);
          break;
        case 3:
          setCategory('fashion');
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

  useEffect(() => {
    //getBrands(1);
    //getBrands(2);
    //getBrands(3);
    getBrands(query);
  }, []);
  useEffect(() => {
    console.log(query);
    // getBrands(query);
  }, []);
  if (loading) return <LoadingScreen />;
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
            onClick={(e) => {
              var newRoute = '/brand?category=1';
              window.location = newRoute;
            }}
          >
            FOOD
          </CategoryTab>
          <CategoryTab
            id="cafe"
            selected={category === 'cafe'}
            onClick={(e) => {
              var newRoute = '/brand?category=2';
              window.location = newRoute;
            }}
          >
            CAFE
          </CategoryTab>
          <CategoryTab
            id="fashion"
            selected={category === 'fashion'}
            onClick={(e) => {
              var newRoute = '/brand?category=3';
              window.location = newRoute;
            }}
          >
            FASHION
          </CategoryTab>
        </CategoryWrapper>
        <CategoryUnderLine></CategoryUnderLine>
        <S.BrandConatiner visible={category === 'food'}>
          {foodBrandList.map((brand) => {
            return (
              <BrandListItem
                id={brand.id}
                name={brand.name}
                image={brand.brand_logo_url}
                subs={brand.subs}
              ></BrandListItem>
            );
          })}
        </S.BrandConatiner>
        <S.BrandConatiner visible={category === 'cafe'}>
          {cafeBrandList.map((brand) => {
            return (
              <BrandListItem
                id={brand.id}
                name={brand.name}
                image={brand.brand_logo_url}
                subs={brand.subs}
              ></BrandListItem>
            );
          })}
        </S.BrandConatiner>
        <S.BrandConatiner visible={category === 'fashion'}>
          {fashionBrandList.map((brand) => {
            return (
              <BrandListItem
                id={brand.id}
                name={brand.name}
                image={brand.brand_logo_url}
                subs={brand.subs}
              ></BrandListItem>
            );
          })}
        </S.BrandConatiner>
      </S.MainContainer>
      <Footer top={4.267}></Footer>
    </>
  );
}

export default BrandPage;
