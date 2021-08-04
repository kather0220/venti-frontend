import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import setToken from '../../functions/setToken';
import getToken from '../../functions/getToken';
import axios from 'axios';
import Button from '../../common/Button/index';
import * as S from './styles';

function SignUpPage() {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const nickname = useRef();
  const id = useRef();
  const pw = useRef();
  const pwCheck = useRef();
  const email = useRef();
  const birthday = useRef();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
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
  const gender = () => {
    if (isMale && !isFemale) return 'man';
    else if (!isMale && isFemale) return 'woman';
    else return null;
  };
  const checkEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  const handleRadioClick = (e) => {
    switch (e.target.value) {
      case '남':
        setIsMale(!isMale);
        if (isFemale) {
          setIsFemale(false);
        }
        break;
      case '여':
        setIsFemale(!isFemale);
        if (isMale) {
          setIsMale(false);
        }
        break;
      default:
        break;
    }
  };

  const handleClick = async (e) => {
    const nicknameInput = nickname.current.value;
    const idInput = userId;
    const pwInput = userPassword;
    const pwCheckInput = pwCheck.current.value;
    const emailInput = email.current.value;
    const birthdayInput =
      birthday.current.value !== '' ? birthday.current.value : null;
    const genderInput = gender();
    e.preventDefault();
    let form = new FormData();
    form.append('username', idInput);
    form.append('password1', pwInput);
    form.append('password2', pwCheckInput);
    form.append('nickname', nicknameInput);
    form.append('email', emailInput);
    form.append('gender', genderInput);
    form.append('birth', birthdayInput);
    if (pwInput.length < 8) {
      alert('비밀번호는 최소 8자 이상입니다. 다시 입력해주세요!');
      return;
    } else if (pwInput !== pwCheckInput) alert('비밀번호를 다시 확인해주세요!');
    else if (!checkEmail(emailInput))
      alert('유효하지 않은 이메일입니다. 다시 입력해주세요!');
    else {
      try {
        const url = 'http://3.36.127.126:8000/accounts/create/';
        const info = {
          username: idInput,
          password1: pwInput, //비밀번호
          password2: pwCheckInput, //확인용 다시치는 비밀번호
          nickname: nicknameInput,
          email: emailInput,
          gender: genderInput,
          birth: birthdayInput,
        };
        setError(null);
        await axios.post(url, form);
        console.log(form);
        setLoading(true);
        alert(
          '회원가입이 완료되었습니다!\nVenti는 회원님의 익명성을 보장하기 위해 비밀번호를 암호화 코드로 저장하오니 안심하셔도 좋습니다.'
        );
        LogIn();
        history.push('/brand-preference');
      } catch (e) {
        console.log(e);
        const statusCode = parseInt(e.message.split(' ').pop());
        switch (statusCode) {
          case 400:
            alert('회원가입 실패했습니다.');
            break;
          default:
            setError(e);
            break;
        }
      }

      setLoading(false);
    }
  };
  const nicknameDuplicationCheck = async () => {
    const nicknameInput = nickname.current.value;
    try {
      const url =
        API_BASE_URL + `/accounts/checknickname/?nickname=${nicknameInput}`;
      setError();
      const res = await axios.get(url);
      setLoading(true);
      console.log(res.data);
      switch (res.data.data) {
        case 'exist':
          alert('존재하는 Nickname 입니다.');
          break;
        case 'not exist':
          alert('사용가능한 Nickname 입니다.');
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
  const idDuplicationCheck = async () => {
    const idInput = id.current.value;
    try {
      const url = API_BASE_URL + `/accounts/checkusername/?username=${idInput}`;
      setError();
      const res = await axios.get(url);
      setLoading(true);
      console.log(res.data);
      switch (res.data.data) {
        case 'exist':
          alert('존재하는 Username 입니다.');
          break;
        case 'not exist':
          alert('사용가능한 Username 입니다.');
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

  const emailDupliacationCheck = async () => {
    const emailInput = email.current.value;
    if (!checkEmail(emailInput)) {
      alert('유효하지 않은 이메일입니다. 다시 입력해주세요!');
      return;
    }
    try {
      const url = API_BASE_URL + `/accounts/checkemail/?email=${emailInput}`;
      setError();
      const res = await axios.get(url);
      setLoading(true);
      console.log(res.data);
      switch (res.data.data) {
        case 'exist':
          alert('존재하는 email 입니다.');
          break;
        case 'not exist':
          alert('사용가능한 email 입니다.');
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

  const LogIn = async () => {
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
      setToken(ACCESS_TOKEN, res.data, userId);
      console.log(res.data);
    } catch (e) {
      console.log(e);
      const statusCode = parseInt(e.message.split(' ').pop());
      switch (statusCode) {
        case 401:
          alert('사용자 정보를 가져오는데 실패했습니다');
          break;
        default:
          setError(e);
          break;
      }
    }
    setLoading(false);
  };
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <S.MainContainer>
      <S.TopBar>
        <S.PageName>회원가입</S.PageName>
        <S.CloseButton
          src={'/img/close-button.png'}
          onClick={(e) => history.push('/log-in')}
        ></S.CloseButton>
      </S.TopBar>
      <S.InputExp>닉네임</S.InputExp>

      <S.InputContainer>
        <S.InputBoxWithText
          placeholder="닉네임을 입력하세요"
          ref={nickname}
        ></S.InputBoxWithText>
        <S.DuplicationCheck onClick={nicknameDuplicationCheck}>
          중복확인
        </S.DuplicationCheck>
      </S.InputContainer>
      <S.InputExp>아이디</S.InputExp>
      <S.InputContainer>
        <S.InputBoxWithText
          placeholder="아이디를 입력하세요"
          name="id"
          ref={id}
          onChange={onChange}
        ></S.InputBoxWithText>
        <S.DuplicationCheck onClick={idDuplicationCheck}>
          중복확인
        </S.DuplicationCheck>
      </S.InputContainer>
      <S.InputExp>
        비밀번호 <pwExp>(8자리 이상, 영문/숫자 조합)</pwExp>
      </S.InputExp>

      <S.InputBox
        placeholder="비밀번호"
        type="password"
        ref={pw}
        name="password"
        onChange={onChange}
      ></S.InputBox>
      <S.InputBox
        placeholder="비밀번호 확인"
        type="password"
        ref={pwCheck}
      ></S.InputBox>
      <S.InputExp>이메일</S.InputExp>
      <S.InputContainer>
        <S.InputBoxWithText
          placeholder="이메일 주소"
          ref={email}
        ></S.InputBoxWithText>
        <S.DuplicationCheck onClick={emailDupliacationCheck}>
          중복확인
        </S.DuplicationCheck>
      </S.InputContainer>
      <S.InputExp>성별(선택)</S.InputExp>
      <S.ButtonContainer>
        <S.ButtonLabel>
          <S.RadioButton
            type="radio"
            value="남"
            onClick={handleRadioClick}
            checked={isMale}
          ></S.RadioButton>
          남
        </S.ButtonLabel>
        <S.ButtonLabel>
          <S.RadioButton
            type="radio"
            value="여"
            onClick={handleRadioClick}
            checked={isFemale}
          ></S.RadioButton>
          여
        </S.ButtonLabel>
      </S.ButtonContainer>
      <S.InputExp>생년월일(선택)</S.InputExp>

      <S.InputBox type="date" ref={birthday}></S.InputBox>
      <S.StyledButton onClick={handleClick}>회원가입</S.StyledButton>
    </S.MainContainer>
  );
}

export default SignUpPage;
