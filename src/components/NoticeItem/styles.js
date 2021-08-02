import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.267rem;
`;

export const BrandLogo = styled.img`
  margin-left: 1rem;
  width: 3.333rem;
  height: 3.333rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
`;

export const NoticeText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: #000000;
  margin-left: 1.133rem;
  margin-right: 2rem;
  width: 13.867rem;
`;

export const TimeText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.733rem;
  color: #919191;
  margin-right: 1rem;
`;

export const Line = styled.hr`
  //size: 0.5rem;
  //border: 0.01rem solid #d6d6d6;
  //background: #d6d6d6;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1.267rem;
  color: #dadada;
`;
