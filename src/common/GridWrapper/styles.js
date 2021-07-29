import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: ${(props) => (props.visible ? 'grid' : 'none')};
  grid-template-columns: auto auto;
  padding: 0.5rem;
`;
