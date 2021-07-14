import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 6.733rem;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  height: 62px;
  position: relative;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  padding-top: 0px;
  height: 62px;
`;

export const StyledLogo = styled.div`
  width: 4.6rem;
  height: 2.133rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.733rem;
  line-height: 2.133rem;
  color: #f40552;
`;

export const HamburgerButton = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  left: 16px;
`;

export const AlarmButton = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  right: 16px;
`;

export const SearchInputBox = styled.input`
  flex-grow: 1;
  background: #f0f0f0;
  border: 1px solid #dddddd;
  margin-right: 8px;
  height: 100%;
`;

export const SearchButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
