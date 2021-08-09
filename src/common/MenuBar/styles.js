import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  position: fixed;
  background: white;
  width: 19.933rem;
  height: 100%;
  //opacity: 0;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.visible ? 'translateX(0)' : 'translateX(-100%)'};
  //display: ${(props) => (props.visible ? 'flex' : 'none')};
  //-webkit-transition: opacity 0.5s ease-in-out;
  //-moz-transition: opacity 0.5s ease-in-out;
  //transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 200;
  transition: transform 0.3s ease-in-out;
  & > * {
    overflow: hidden;
  }
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
  font-family: Noto Sans KR;
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

export const Line = styled.div`
  width: 100%;
  height: 0;
  left: 0px;
  margin-top: 3.867rem;
  border-bottom: 1px solid #dddddd;
`;

export const TransferLink = styled(Link)`
  margin-top: 1.4rem;
  margin-left: 1.533rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #aaaaaa;
`;
