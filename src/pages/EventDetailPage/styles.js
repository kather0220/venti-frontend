import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EvenInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1.533rem;
`;

export const BrandNameAndDate = styled.div`
  position: absolute;
  top: 0.4rem;
  left: 1.067rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.733rem;
  color: #919191;
  & brand {
    color: black;
    font-size: 0.667rem;
  }
`;

export const EventName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.067rem;
  text-align: center;
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  word-break: keep-all;
`;

export const HeartIcon = styled.img`
  position: absolute;
  right: 1rem;
  width: 1.267rem;
  height: 1.267rem;
`;

export const EventImage = styled.img`
  margin: 2.6rem 1rem 1.8rem;
  width: 22.867rem;
`;

export const EventText = styled.pre`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  //line-height: 2.733rem;
  color: black;
  width: 22.867rem;
  overflow: auto;
  white-space: pre-wrap;
  margin: 0 1rem 0;
  & notice {
    color: #919191;
  }
`;

export const Button = styled.button`
  width: 9.067rem;
  height: 2.333rem;
  margin: 4.2rem 8rem 3.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: white;
  background: #f40552;
  border-radius: 10px;
  border: none;
`;
