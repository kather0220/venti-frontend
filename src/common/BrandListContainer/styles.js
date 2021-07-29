import styled from 'styled-components';

export const BrandListContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 1.2rem;
  margin-bottom: 3.533rem;
`;
