import * as S from './styles';
import React from 'react';
import { useHistory } from 'react-router-dom';

function GridItem(props) {
  const history = useHistory();
  const event_id = 'whopper-event'; // 임시값. 서버에서 넘겨 받을 예정
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/event-detail/${event_id}`);
  };
  return (
    <>
      <S.GridItemContainer>
        <S.GridInnerContainer>
          <S.GridOverlay visible={props.isEnd}></S.GridOverlay>
        </S.GridInnerContainer>
        <S.GridInnerContainer>
          <S.GridImage src={'/img/whopper-event.png'} onClick={handleClick} />
          <S.FirstRow>
            <S.EventName>6월 와퍼 할인 이벤트</S.EventName>
            <S.HeartIcon src={'/img/heart.png'} />
          </S.FirstRow>
          <S.SecondRow>버거킹</S.SecondRow>
          <S.ThirdRow>D-5{'     '}조회 130회</S.ThirdRow>
        </S.GridInnerContainer>
      </S.GridItemContainer>
    </>
  );
}

export default GridItem;
