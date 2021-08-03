import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '../../common/Button/index';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import setToken from '../../functions/setToken';
import * as S from './styles';

function LogInPage() {
  const [userId, setUserId] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const onChange = (event) => {
    const {
      target: { id, value },
    } = event;
    switch (id) {
      case 'id':
        setUserId(value);
        break;
      case 'password':
        setUserPassword(value);
        break;
      default:
        break;
    }
  };
  const setWithId = (key, value, id) => {
    //const now = new Date();
    const item = {
      value: value,
      userId: id,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };
  function setJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (!userId || !userPassword) alert('정보를 모두 입력해주세요!');
    else {
      try {
        const url = API_BASE_URL + '/accounts/login/';
        const info = {
          username: userId, // id
          password: userPassword, // pwd
        };
        console.log(info);
        setError();
        const res = await axios.post(url, info);
        setLoading(true);
        //setWithId('currentUser', res.data, userId);
        setToken(ACCESS_TOKEN, res.data, userId);
        //const data_arr = [userId, res.data];
        //window.localStorage.setItem('jwt', res.data);
        //window.localStorage.setItem('currentUser', userId);
        console.log(res.data);
        alert(`${userId}님 반갑습니다!`);
        history.push('/');
      } catch (e) {
        console.log(e);
        const statusCode = parseInt(e.message.split(' ').pop());
        switch (statusCode) {
          case 401:
            alert('로그인 실패');
            break;
          default:
            setError(e);
            break;
        }
      }
      setLoading(false);
    }
  };
  if (loading) return <div>로그인 처리중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <S.MainContainer>
      <S.Logo src={'img/Venti.png'}></S.Logo>
      <S.IdPwContainer>
        <S.InputContainer>
          <S.ContainerText>아이디</S.ContainerText>
          <S.IdInput id="id" type="text" onChange={onChange}></S.IdInput>
        </S.InputContainer>
        <S.InputContainer>
          <S.ContainerText>비밀번호</S.ContainerText>
          <S.PwInput
            id="password"
            type="password"
            onChange={onChange}
          ></S.PwInput>
        </S.InputContainer>
      </S.IdPwContainer>
      <Button onClick={handleClick} text="로그인"></Button>
      <S.SignUpLink to="/sign-up">Venti 회원가입</S.SignUpLink>
    </S.MainContainer>
  );
}

export default LogInPage;
