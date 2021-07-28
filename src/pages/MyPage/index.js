import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../common/Button/index';
import * as S from './styles';

function MyPage() {
  const history = useHistory();

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const nickname = useRef();
  const id = useRef();
  const pw = useRef();
  const pwCheck = useRef();
  const email = useRef();
  const birthday = useRef();
  const gender = () => {
    if (isMale && !isFemale) return '남';
    else if (!isMale && isFemale) return '여';
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
  const handleClick = (e) => {
    e.preventDefault();
    const nicknameInput = nickname.current.value;
    const idInput = id.current.value;
    const pwInput = pw.current.value;
    const pwCheckInput = pwCheck.current.value;
    const emailInput = email.current.value;
    const birthdayInput = birthday.current.value;
    // 닉네임이나 id 중복체크 들어가야 된다. http 상태코드 409인 경우
    if (pwInput.length < 8) {
      alert('비밀번호는 최소 8자 이상입니다. 다시 입력해주세요!');
      return;
    } else if (pwInput !== pwCheckInput) alert('비밀번호를 다시 확인해주세요!');
    else if (!checkEmail(emailInput))
      alert('유효하지 않은 이메일입니다. 다시 입력해주세요!');
    else {
      alert(
        '회원가입이 완료되었습니다!\nVenti는 회원님의 익명성을 보장하기 위해 비밀번호를 암호화 코드로 저장하오니 안심하셔도 좋습니다.'
      );
      history.push('/');
    }
  };

  return (
    <S.MainContainer>
      <S.TopBar>
        <S.PageName>개인정보수정</S.PageName>
        <S.CloseButton
          src={'/img/close-button.png'}
          onClick={(e) => history.push('/')}
        ></S.CloseButton>
      </S.TopBar>
      <S.InputExp>닉네임</S.InputExp>
      <S.InputBox
        placeholder="닉네임을 입력하세요"
        defaultValue="이벤티"
        ref={nickname}
      ></S.InputBox>
      <S.InputExp>아이디</S.InputExp>
      <S.InputBox
        placeholder="아이디를 입력하세요"
        defaultValue="i_love_venti"
        ref={id}
      ></S.InputBox>

      <S.InputExp>
        비밀번호 <pwExp>(최소 8자 이상)</pwExp>
      </S.InputExp>

      <S.InputBox placeholder="비밀번호" type="password" ref={pw}></S.InputBox>
      <S.InputBox
        placeholder="비밀번호 확인"
        type="password"
        ref={pwCheck}
      ></S.InputBox>
      <S.InputExp>이메일</S.InputExp>
      <S.InputBox
        placeholder="이메일 주소"
        defaultValue="venti@gmail.com"
        ref={email}
      ></S.InputBox>
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
      <S.StyledButton onClick={handleClick}>수정완료</S.StyledButton>
    </S.MainContainer>
  );
}

export default MyPage;
