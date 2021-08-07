import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 7.903rem;
  padding: 1.6rem 0.818rem;
  margin-bottom: 1.6rem;
`;

export const BrandContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrandImage = styled.img`
  width: 5.667rem;
  height: 5.667rem;
  border-radius: 50%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
  object-fit: contain;
`;

export const BrandImageOverlay = styled.div`
  display: ${(props) => (props.isVisible ? 'static' : 'none')};
  top: 0;
  left: 0;
  width: 5.667rem;
  height: 5.667rem;
  border-radius: 50%;
  z-index: 5;
  background: rgba(40, 40, 40, 0.42);
`;

export const BrandName = styled.div`
  font-family: ${(props) => props.font};
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 1.037rem;
  text-align: center;
`;
