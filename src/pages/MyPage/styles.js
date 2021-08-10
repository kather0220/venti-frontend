import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  height: 3.933rem;
  background: #f1f1f1;
`;

export const PageName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: black;
`;

export const CloseButton = styled.img`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  right: 1.133rem;
`;

export const InputExp = styled.div`
  padding-left: 1.333rem;
  margin-top: 1.067rem;
  margin-bottom: 0.533rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1.067rem;
  align-items: center;
  & pwExp {
    font-weight: normal;
    font-size: 0.733rem;
    padding-left: 0.333rem;
  }
`;

export const InputBox = styled.input`
  margin: 0 1rem;
  width: 23rem;
  height: 3.333rem;
  background: white;
  -webkit-appearance: ${(props) => (props.type === 'date' ? '' : 'none')};
  box-shadow: 0px 0px 0.733rem rgba(0, 0, 0, 0.06);
  border: none;
  padding-left: 0.6rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 0.933rem;
  color: '#3A3B3C';
  &::placeholder {
    color: #919191;
  }
  &:focus {
    outline: none;
  }
`;

export const InputBoxWithText = styled.input`
  width: 23rem;
  margin: 0 1rem;
  height: 3.333rem;
  background: white;
  -webkit-appearance: none;
  box-shadow: 0px 0px 0.733rem rgba(0, 0, 0, 0.06);
  border: none;
  padding-left: 0.6rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 0.933rem;
  &::placeholder {
    color: #919191;
  }
  &:focus {
    outline: none;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  display: inline-flex;
`;
export const Line = styled.div`
  width: 23rem;
  height: 0;
  border-bottom: 1px solid #f1f1f1;
`;
export const DuplicationCheck = styled.span`
  position: absolute;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.733rem;
  right: 1.867rem;
  top: 1.133rem;
  color: #f40552;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1.6rem;
  align-items: center;
`;
export const RadioButton = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 0.333rem;
  &:checked {
    color: black;
  }
`;

export const ButtonLabel = styled.label`
  //padding-left: 0.333rem;
  width: 4.333rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1.067rem;
  color: #ababab;
`;

export const StyledButton = styled.button`
  width: 9.067rem;
  height: 2.333rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: white;
  background: #f40552;
  border-radius: 10px;
  border: none;
  margin: 2rem 7.967rem 3.267rem;
`;
