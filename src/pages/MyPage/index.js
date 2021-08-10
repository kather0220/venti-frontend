import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '../../common/Button/index';
import LoadingScreen from '../../common/LoadingScreen';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import getToken from '../../functions/getToken';
import * as S from './styles';

function MyPage() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const nickname = useRef();
  const id = useRef();
  const pw = useRef();
  const pwCheck = useRef();
  const email = useRef();
  const birthday = useRef();
  const man = useRef();
  const woman = useRef();
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
  const checkPassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };
  const nicknameDuplicationCheck = async () => {
    const nicknameInput = nickname.current.value;
    if (!nicknameInput) {
      alert('닉네임을 입력해주세요!');
      return;
    }
    /*
    if (input === nicknameInput) {
      alert('기존의 닉네임과 동일합니다.');
      return;
    }
    */
    try {
      const url =
        API_BASE_URL + `/accounts/checknickname/?nickname=${nicknameInput}`;
      setError();
      const res = await axios.get(url);
      // setLoading(true);
      console.log(res.data);
      switch (res.data.data) {
        case 'exist':
          alert('존재하는 닉네임 입니다.');
          break;
        case 'not exist':
          alert('사용가능한 닉네임 입니다.');
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
    //setLoading(false);
  };
  const emailDupliacationCheck = async () => {
    const emailInput = email.current.value;
    if (!emailInput) {
      alert('이메일을 입력해주세요!');
      return;
    }
    /*
    if (input === emailInput) {
      alert('기존의 이메일과 동일합니다.');
      return;
    }
    */
    if (!checkEmail(emailInput)) {
      alert('유효하지 않은 이메일입니다. 다시 입력해주세요!');
      return;
    }
    try {
      const url = API_BASE_URL + `/accounts/checkemail/?email=${emailInput}`;
      setError();
      const res = await axios.get(url);
      //   setLoading(true);

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
    //  setLoading(false);
  };

  const handleRadioClick = (e) => {
    switch (e.target.value) {
      case '남':
        setIsMale(true);
        if (isFemale) {
          setIsFemale(false);
        }
        woman.current.checked = false;
        break;

      case '여':
        setIsFemale(true);
        if (isMale) {
          setIsMale(false);
        }
        man.current.checked = false;
        break;
      default:
        break;
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const nicknameInput = nickname.current.value;
    const idInput = id.current.value;
    const pwInput = pw.current.value;
    const pwCheckInput = pwCheck.current.value;
    const emailInput = email.current.value;
    const birthdayInput = birthday.current.value;
    const genderInput = gender();
    if (!nicknameInput || !idInput || !pwInput || !emailInput) {
      alert('필수 항목들은 모두 입력해주세요!');
    } else if (pwInput.length < 8) {
      alert('비밀번호는 최소 8자 이상입니다. 다시 입력해주세요!');
      return;
    } else if (pwInput !== pwCheckInput) {
      alert('비밀번호를 다시 확인해주세요!');
      return;
    } else if (!checkPassword(pwInput)) {
      alert('비밀번호 형식을 다시 확인해주세요!');
      return;
    } else if (!checkEmail(emailInput))
      alert('유효하지 않은 이메일입니다. 다시 입력해주세요!');
    else {
      try {
        const url = 'http://3.36.127.126:8000/accounts/update/';
        let form = new FormData();
        form.append('username', idInput);
        form.append('password1', pwInput);
        form.append('password2', pwCheckInput);
        form.append('nickname', nicknameInput);
        form.append('email', emailInput);
        form.append('gender', genderInput);
        form.append('birth', birthdayInput);
        setError(null);

        const res = await axios.post(url, form, {
          headers: {
            Authorization: 'JWT ' + getToken(ACCESS_TOKEN).token,
          },
        });

        setLoading(true);
        alert('수정이 완료되었습니다!');
        history.push('/');
      } catch (e) {
        console.log(e);
        const statusCode = parseInt(e.message.split(' ').pop());
        switch (statusCode) {
          case 400:
            alert('수정 실패했습니다.');
            break;
          default:
            setError(e);
            break;
        }
      }

      setLoading(false);
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

      setUserInfo(res.data);
      switch (userInfo.gender) {
        case 'man':
          setIsMale(true);
          setIsFemale(false);
          break;
        case 'woman':
          setIsMale(false);
          setIsFemale(true);
          break;
        case null:
          setIsMale(false);
          setIsFemale(false);
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
    if (!getToken(ACCESS_TOKEN)) {
      alert('로그인이 필요합니다.');
      history.push('/');
    }
    getUserInfo();
  }, []);
  if (loading) return <LoadingScreen />;
  if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <S.MainContainer>
      <S.TopBar>
        <S.PageName>개인정보수정</S.PageName>
        <S.CloseButton
          src={'/img/close-button.png'}
          onClick={(e) => history.push('/')}
        ></S.CloseButton>
      </S.TopBar>
      <S.InputExp>닉네임 * </S.InputExp>
      <S.InputContainer>
        <S.InputBoxWithText
          placeholder="닉네임을 입력하세요"
          defaultValue={userInfo.nickname}
          ref={nickname}
        ></S.InputBoxWithText>
        <S.DuplicationCheck onClick={nicknameDuplicationCheck}>
          중복확인
        </S.DuplicationCheck>
      </S.InputContainer>
      <S.InputExp>
        아이디 *<pwExp>(7자리 이하)</pwExp>
      </S.InputExp>
      <S.InputBox
        placeholder="아이디를 입력하세요"
        defaultValue={userInfo.username}
        disabled={true}
        ref={id}
      ></S.InputBox>

      <S.InputExp>
        비밀번호 * <pwExp>(8자리 이상, 영문/숫자/특수문자 조합)</pwExp>
      </S.InputExp>

      <S.InputBox placeholder="비밀번호" type="password" ref={pw}></S.InputBox>
      <S.Line></S.Line>
      <S.InputBox
        placeholder="비밀번호 확인"
        type="password"
        ref={pwCheck}
      ></S.InputBox>

      <S.InputExp>이메일 * </S.InputExp>
      <S.InputContainer>
        <S.InputBoxWithText
          placeholder="이메일 주소"
          defaultValue={userInfo.email}
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
            ref={man}
            //onClick={handleRadioClick}
            onChange={handleRadioClick}
            defaultChecked={userInfo.gender === 'man'}
          ></S.RadioButton>
          남
        </S.ButtonLabel>
        <S.ButtonLabel>
          <S.RadioButton
            type="radio"
            value="여"
            //onClick={handleRadioClick}
            ref={woman}
            onChange={handleRadioClick}
            defaultChecked={userInfo.gender === 'woman'}
          ></S.RadioButton>
          여
        </S.ButtonLabel>
      </S.ButtonContainer>
      <S.InputExp>생년월일(선택)</S.InputExp>

      <S.InputBox
        type="date"
        ref={birthday}
        defaultValue={userInfo.birth}
      ></S.InputBox>
      <S.StyledButton onClick={handleClick}>수정완료</S.StyledButton>
    </S.MainContainer>
  );
}
export default MyPage;
