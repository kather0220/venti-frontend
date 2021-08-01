import styled from 'styled-components';

export const StyledItem = styled.button`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 1.067rem;
  padding: 0.867rem 1.39rem;
  //background: #eeeeee;
  border-radius: 3.333rem;
  border: none;
  margin: 0.467rem 0.433rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;
