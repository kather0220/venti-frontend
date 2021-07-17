import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 3.8rem;
  width: 6.7rem;
  height: 2.033rem;
`;

export const IdPwContainer = styled.div`
  margin-top: 8.8rem;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 22.867rem;
  height: 4.3665rem;
  border: 1px solid #f1f1f1;
`;
export const ContainerText = styled.div`
  padding-left: 0.8rem;
  width: 7.533rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1.067rem;
  color: #919191;
`;
export const IdInput = styled.input`
  border: 1px solid #f1f1f1;
  color: black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.067rem;
  line-height: 1.267rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const PwInput = styled.input`
  border: 1px solid #f1f1f1;
  color: #ababab;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.067rem;
  line-height: 1.267rem;
  letter-spacing: 0.4rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const LogInButton = styled.button`
  width: 9.067rem;
  height: 2.333rem;
  margin-top: 9.133rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: white;
  background: #f40552;
  border-radius: 10px;
  border: none;
`;

export const SignUpLink = styled(Link)`
  margin-top: 1.267rem;
  margin-bottom: 15.867rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 0.933rem;
  color: #aaaaaa;
`;
