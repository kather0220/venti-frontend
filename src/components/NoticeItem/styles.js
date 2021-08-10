import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.267rem;
  position: relative;
  border-bottom: 1px solid #dadada;
  padding-bottom: 1.067rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const BrandLogo = styled.img`
  //margin-left: 1rem;
  width: 3.333rem;
  height: 3.333rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
`;

export const NoticeText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  color: #000000;
  margin-left: 0.7rem;
  margin-right: 2rem;
  width: 13.867rem;
  word-break: keep-all;
  & bold {
    font-weight: bold;
  }
  & day {
    font-weight: bold;
    color: #f40552;
  }
`;

export const TimeText = styled.div`
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.65rem;
  color: #919191;
  right: 1.067rem;
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
