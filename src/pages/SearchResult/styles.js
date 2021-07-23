import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultMessage = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  margin: 1.667rem 0;
  color: black;
  & keyword {
    color: #f40552;
  }
`;
