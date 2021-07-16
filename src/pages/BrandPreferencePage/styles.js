import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Exp = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.067rem;
  text-align: center;
  padding: 2.133rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0 1.545rem;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7.903rem;
  padding: 1.6rem 0.818rem;
  margin-bottom: 1.6rem;
`;

export const BrandImage = styled.img`
  width: 5.667rem;
  height: 5.667rem;
  border-radius: 50%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
`;

export const BrandName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1.037rem;
  text-align: center;
`;
