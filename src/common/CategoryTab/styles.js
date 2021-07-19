import styled from 'styled-components';

export const CategoryTab = styled.div`
  margin-top: 1.267rem;
  margin-right: 2.867rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: ${(props) => (props.selected ? 'black' : '#b3b3b3')};
`;
