import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8.067rem;
  background: #f0f0f0;
  margin-top: 2.314rem;
`;

export const Exp = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.867rem;
  color: #9a9a9a;
  text-align: center;
  padding: 1.067rem 0;
`;

export const LinkInfoWrapper = styled.div`
  //flex-direction: row;
  //display: inline-block;
  padding-bottom: 2.067rem;
`;

export const LinkInfo = styled(Link)`
  color: #b0b0b0;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.733rem;
  padding: 0 0.433rem;
`;
