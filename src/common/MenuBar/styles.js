import styled from 'styled-components';

export const MainContainer = styled.div`
  position: fixed;
  background: white;
  width: 19.933rem;
  height: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 200;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5.267rem;
  color: white;
  background: #f40552;
  margin-bottom: 1.067rem;
  position: relative;
`;

export const TopBarText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  margin-left: 1.867rem;
`;

export const Arrow = styled.img`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  right: 1.867rem;
`;

export const MenuName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.267rem;
  width: 6rem;
  color: black;
  margin: 1.067rem 1.667rem;
`;
