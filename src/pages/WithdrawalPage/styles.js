import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  //position: absolute;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.533rem;
  margin-top: 1.6rem;
  margin-left: 1.067rem;
  margin-bottom: 1.067rem;
`;

export const Exp = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.867rem;
  margin-left: 1.067rem;
  align-items: center;

  color: #000000;
`;

export const OptionContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.06);
  border-radius: 2rem;
  margin-top: 2.467rem;
  margin-right: 1.067rem;
  margin-left: 1.067rem;
  margin-bottom: 5rem;
  padding: 1.133rem;
`;

export const ButtonLabel = styled.label`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.867rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.933rem;
  padding-bottom: 0.933rem;
  color: #000000;
`;

export const RadioButton = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 0.867rem;
  align-items: center;
  justify-content: center;
  border-color: #919191;
`;

export const Button = styled.button`
  width: 9.067rem;
  height: 2.333rem;
  margin: 4.667rem 5.554rem 0.7rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: white;
  background: #f40552;
  border-radius: 10px;
  border: none;
`;
