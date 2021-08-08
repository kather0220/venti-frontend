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
  margin-bottom: 0.333rem;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  //width: 100%;

  margin: 1.667rem 1.067rem;

  background: #ffffff;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
`;

export const QuestionBox = styled.div`
  padding: 2rem 1rem;
`;

export const Question = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.067rem;
  color: #f40552;
  margin-bottom: 1.2rem;
`;

export const Answer = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.867rem;

  color: #000000;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #dddddd;
`;

export const BottomText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.733rem;
  margin: 0 2.067rem 3rem;
  color: #5b5b5b;
`;
