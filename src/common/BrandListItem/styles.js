import styled from 'styled-components';

export const ListItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 5.2rem;
  margin: 0.333rem 1rem;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
`;

export const BrandImage = styled.img`
  position: absolute;
  width: 3.333rem;
  height: 3.333rem;
  left: 1.667rem;
  top: 0.933rem;
  border-radius: 50%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
`;

export const BrandName = styled.div`
  position: absolute;
  margin-left: 6.7rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.133rem;
  color: black;
`;

export const Star = styled.img`
  position: absolute;
  width: 1.333rem;
  height: 1.333rem;
  right: 1.933rem;
`;
