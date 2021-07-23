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
`;

export const BrandNameAndText = styled.div`
  display: inline;
  padding-left: 1.2rem;

  & span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.067rem;
    color: black;
  }
  & img {
    width: 1.067rem;
    height: 1.067rem;
    margin-left: 1.067rem;
  }
  & text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: #676767;
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
