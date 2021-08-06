import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function NoticeItem(props) {
  const history = useHistory();
  const noticeText = (type) => {
    switch (type) {
      case 'new':
        return (
          props.brand_name +
          '에서' +
          props.event_name +
          '\n새로운 이벤트가 업데이트 되었어요.'
        );

        break;
      case 'end12':
        return (
          props.brand_name +
          ' ' +
          props.event_name +
          '이벤트 마감이 12시간 남았어요.'
        );
        break;
      case 'end24':
        return (
          props.brand_name +
          ' ' +
          props.event_name +
          '이벤트 마감이 하루 남았어요.'
        );
        break;
      case 'end48':
        return (
          props.brand_name +
          ' ' +
          props.event_name +
          '이벤트 마감이 이틀 남았어요.'
        );
        break;
      default:
        break;
    }
  };
  const handleClick = () => {
    history.push(`/event-detail/${props.event_id}`);
  };
  return (
    <>
      <S.ItemContainer>
        <S.BrandLogo src={props.brand_img} onClick={handleClick}></S.BrandLogo>
        <S.NoticeText onClick={handleClick}>
          {noticeText(props.type)}
        </S.NoticeText>
        <S.TimeText>{props.time}</S.TimeText>
      </S.ItemContainer>
      <S.Line></S.Line>
    </>
  );
}

export default NoticeItem;
