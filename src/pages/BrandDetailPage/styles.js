import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BrandProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 7.6rem;
  background: #f6f6f6;
`;

export const BrandImage = styled.img`
  width: 4.533rem;
  height: 4.2rem;
  margin-left: 1.867rem;
  object-fit: contain;
  background: white;
`;

export const BrandNameAndText = styled.div`
  display: inline;
  padding-left: 1.2rem;
  margin-right: 1.067rem;
  word-break: keep-all;
  line-height: 1.2rem;

  & span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 1.067rem;
    color: black;
    //margin-bottom: 0.1rem;
  }
  & img {
    width: 1.067rem;
    height: 1.067rem;
    margin-left: 1.067rem;
  }
  & text {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 0.667rem;
    line-height: 80%;
    color: #676767;
    // width: 15.333rem;
  }
`;

export const EventExp = styled.div`
  margin-top: 1.6rem;
  margin-left: 1.067rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;

  & text {
    font-size: 0.8rem;
    font-style: normal;
    font-weight: normal;
    color: #909090;
  }
`;

export const MarginBox = styled.div`
  height: 10rem;
  width: 25rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
