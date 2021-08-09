import styled from 'styled-components';

export const UnderlineContainer = styled.div`
  width: 100%;
  height: 0;
  margin: 0.753rem 0;
  border-bottom: 1px solid #f0f0f0;
`;

export const CategoryUnderLine = styled.div`
  width: 100%;
  height: 0;
  margin: 0.753rem 0 1.267rem;
  border-bottom: 1px solid #f0f0f0;
  //position: relative;
`;

export const BlackUnderline = styled.div`
  //z-index: 1;
  position: absolute;
  width: ${(props) => props.width}rem;
  height: 0;
  left: ${(props) => props.margin}rem;
  border: 0.067rem solid black;
  background: black;
`;
