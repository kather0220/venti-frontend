import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Exp = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 1.067rem;
  text-align: center;
  padding: 2.133rem;

  & name {
    font-weight: bold;
  }

  & text {
    font-size: 0.8rem;
    color: #858585;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
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
  object-fit: cover;
`;

export const BrandImageOverlay = styled.div`
  width: 5.667rem;
  height: 5.667rem;
  border-radius: 50%;
  z-index: 10;
  background: rgba(40, 40, 40, 0.42);
`;

export const BrandName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1.037rem;
  text-align: center;
`;

export const OpacityBox = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 9.333rem;
  z-index: 100;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.88) 60.42%,
    #ffffff 100%
  );
`;

export const SelectButton = styled.button`
  position: fixed;
  bottom: 4.533rem;
  width: 9.067rem;
  height: 2.333rem;
  background: ${(props) => (props.disabled ? '#b3b3b3' : '#F40552')};
  color: white;
  border-radius: 10px;
  border: none;
  font-family: Noto Sans KR;
  font-size: 0.933rem;
  font-weight: 700;
  z-index: 200;
`;
