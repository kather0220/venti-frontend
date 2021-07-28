import styled from 'styled-components';

export const StyledItem = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9667rem;
  padding: 0.867rem 1.5rem;
  //background: #eeeeee;
  border-radius: 3.333rem;
  border: none;
  margin: 0.467rem 0.433rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;
