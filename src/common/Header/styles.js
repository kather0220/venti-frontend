import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 6.733rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.133rem;
  position: relative;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.933rem 1.067rem;
  padding-top: 0;
  height: 4.133rem;
`;

export const StyledLogo = styled.img`
  width: 4.6rem;
  height: 1.4rem;
  //font-family: Montserrat;
  //font-style: normal;
  //font-weight: 600;
  //font-size: 1.733rem;
  //line-height: 2.133rem;
  color: #f40552;
`;

export const HamburgerButton = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  left: 1.067rem;
`;

export const AlarmButton = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  right: 1.067rem;
`;

export const SearchInputBox = styled.input`
  flex-grow: 1;
  background: #f0f0f0;
  border: 1px solid #dddddd;
  margin-right: 0.533rem;
  height: 100%;
  color: black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.867rem;
  padding-left: 1.6rem;
  &::placeholder {
    color: #959595;
  }
`;

export const SearchButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const BlackOverlay = styled.div`
  display: ${(props) => (props.visible ? '' : 'none')};
  position: fixed;
  width: 25rem;
  height: 100%;
  background: rgba(64, 64, 64, 0.49);
  z-index: 100;
`;
