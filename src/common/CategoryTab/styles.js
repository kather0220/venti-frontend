import styled from 'styled-components';

export const CategoryTab = styled.div`
  margin-top: 1.267rem;
  margin-right: 2.867rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid
    ${(props) => (props.selected ? 'black' : 'transparent')};
  position: relative;
  top: 0.867rem;
  color: ${(props) => (props.selected ? 'black' : '#b3b3b3')};
`;
