import styled from 'styled-components';

export const GridInnerContainer = styled.div`
  position: absolute;
  top: 1.267rem;
  bottom: 0.933rem;
  left: 0;
  width: 91%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  //align-items: center;
`;
export const GridImage = styled.img`
  height: 13.453rem;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;
export const GridOverlay = styled.div`
  display: ${(props) => (props.visible ? '' : 'none')};
  height: 13.453rem;
  width: 100%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;
export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.533rem;
`;

export const EventName = styled.div`
  color: ${(props) => (props.end ? '#909090' : 'black')};
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 0.983rem;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const SecondRow = styled.div`
  color: ${(props) => (props.end ? '#909090' : 'black')};
  font-family: Noto Sans KR;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 600;
  font-size: 0.667rem;
  padding-top: 0.867rem;
`;

export const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  color: #909090;
  font-weight: 500;
  font-size: 0.733rem;
  margin-right: 0.7rem;
  white-space: pre;
`;

export const HeartIcon = styled.img`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 0.812rem;
  height: 0.758rem;
`;

export const GridItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18.511rem;
  padding: 1.067rem 0.5rem;
  margin-bottom: 2.242rem;
`;
