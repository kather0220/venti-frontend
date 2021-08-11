import styled from 'styled-components';

export const Banner = styled.img`
  width: 100%;
  height: 14.4rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Exp = styled.div`
  justify-content: start;
  align-items: center;
  padding: 1.667rem 1.067rem 0.2rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.067rem;
`;

export const CategoryTab = styled.div`
  margin-right: 2.867rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.933rem;
  color: ${(props) => (props.selected ? 'black' : '#b3b3b3')};
`;

export const CategoryUnderLine = styled.div`
  width: 100%;
  height: 0;
  margin-top: 0.533rem;
  border: 0.067rem solid #f0f0f0;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 0.567rem;
`;

export const GridItem = styled.div`
  width: 100%;
  height: 13.453rem;
  padding: 1.067rem 0.5rem;
  border-radius: 5px;
`;

export const BlackOverlay = styled.div`
  display: ${(props) => (props.clicked ? '' : 'none')};
  position: fixed;
  width: 25rem;
  height: 100%;
  background: rgba(64, 64, 64, 0.49);
  z-index: 100;
`;

export const MoreButton = styled.button`
  display: ${(props) => (props.visible ? '' : 'none')};
  border: 1px solid #919191;
  border-radius: 1.8rem;
  color: #909090;
  width: 4.733rem;
  height: 1.667rem;
  background: white;
  margin-top: 3rem;
  margin-left: 10rem;
  & img {
    width: 0.467rem;
    height: 0.267rem;
    margin-right: 0.451rem;
  }
`;
