import styled from 'styled-components';

export const FilterButton = styled.img`
  position: absolute;
  right: 1.067rem;
  bottom: 0;
  width: 1.233rem;
  height: 1.233rem;
`;

export const MainContainer = styled.div`
  position: fixed;
  background: white;
  bottom: 0;
  width: 25rem;
  height: 74.87%;
  border-radius: 1rem 1rem 0 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 200;
`;

export const BlackOverlay = styled.div`
  display: ${(props) => (props.visible ? '' : 'none')};
  position: absolute;
  width: 25rem;
  height: 100%;
  background: rgba(64, 64, 64, 0.49);
  z-index: 100;
`;

export const TextAndButton = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 1.733rem 1.067rem 1.267rem;
`;

export const TopText = styled.div`
  position: absolute;
  left: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  color: black;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 0;
  width: 1.6rem;
  height: 1.6rem;
`;
