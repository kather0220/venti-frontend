import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultMessage = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  margin: 1.667rem 0;
  color: black;
  text-align: center;
  & keyword {
    color: #f40552;
  }
`;

export const ResultTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1.667rem;
  margin-left: 1.133rem;
`;
