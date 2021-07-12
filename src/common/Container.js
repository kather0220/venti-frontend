import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0vw;
  top: 0vw;
  background: white;
`;

function Container() {
  return <StyledContainer></StyledContainer>;
}

export default Container;
