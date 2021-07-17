import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 3.8rem;
  width: 6.2rem;
  height: 2.867rem;
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
export const IdPwInput = styled.input`
  //margin-left: 4.533rem;
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
