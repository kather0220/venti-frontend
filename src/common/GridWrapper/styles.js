import styled from 'styled-components';

export const StyledGridWrapper = styled.div`
  display: ${(props) => (props.visible ? 'grid' : 'none')};
  grid-template-columns: auto auto;
  padding: 0.567rem;
`;
