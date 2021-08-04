import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Exp = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  margin-left: 1.067rem;
  margin-bottom: 0.87rem;
  color: #919191;
`;

export const NoResultMessage = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.933rem;
  margin-top: 5.133rem;
  display: ${(props) => (props.visible ? 'column' : 'none')};
  flex-direction: column;
  text-align: center;
`;
