import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterButton = styled.img`
  position: absolute;
  right: 1.067rem;
  bottom: 0;
  width: 1.233rem;
  height: 1.233rem;
`;

export const CategoryUnderLine = styled.div`
  width: 100%;
  height: 0;
  margin-top: 0.533rem;
  border: 0.067rem solid #f0f0f0;
`;

export const BlackOverlay = styled.div`
  display: ${(props) => (props.visible ? '' : 'none')};
  position: fixed;
  width: 25rem;
  height: 100%;
  background: rgba(64, 64, 64, 0.49);
  z-index: 100;
`;

export const FilterContainer = styled.div`
  position: fixed;
  background: white;
  bottom: 0;
  width: 25rem;
  height: 74.87%;
  border-radius: 1rem 1rem 0 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 200;
`;

export const TextAndButton = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 1.733rem 1.067rem 1.267rem;
`;

export const TopText = styled.div`
  position: absolute;
  left: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  color: black;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 0;
  width: 1.6rem;
  height: 1.6rem;
`;

export const TopGreyLine = styled.div`
  width: 25rem;
  height: 0;
  margin-top: 1.267rem;
  border: 0.05px solid #d3d3d3;
`;
export const FilterItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 1.133rem;
  padding-right: 0.633rem;
  padding-left: 0.633rem;
  padding-bottom: 5.4rem;
  //overflow-wrap: break-word;
  //white-space: break-spaces;
  //word-break: break-word;
  //overflow-wrap: anywhere;
  //word-break: break-all;
  flex-flow: wrap;
`;
export const FilterItem = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.067rem;
  padding: 0.867rem 1.7rem;
  background: #eeeeee;
  border-radius: 3.333rem;
  margin: 0.467rem 0.433rem;
`;
