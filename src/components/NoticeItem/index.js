import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function NoticeItem(props) {
  const history = useHistory();
  const noticeText = (type) => {
    switch (type) {
      case 'new':
        return (
          <S.NoticeText>
            <bold>{props.brand_name}</bold>에서
            <bold> {props.event_name}</bold> 새로운 이벤트가 업데이트 되었어요.
          </S.NoticeText>
        );

        break;
      case 'end12':
        return (
          <S.NoticeText>
            <day>[12H] </day>
            <bold>{props.brand_name}</bold>의 <bold>{props.event_name}</bold>{' '}
            이벤트 마감이 12시간 남았어요.
          </S.NoticeText>
        );
        break;
      case 'end24':
        return (
          <S.NoticeText>
            <day>[D-1] </day>
            <bold>{props.brand_name}</bold>의 <bold>{props.event_name}</bold>{' '}
            이벤트 마감이 24시간 남았어요.
          </S.NoticeText>
        );
        break;
      case 'end48':
        return (
          <S.NoticeText>
            <day>[D-2] </day>
            <bold>{props.brand_name}</bold>의 <bold>{props.event_name}</bold>{' '}
            이벤트 마감이 이틀 남았어요.
          </S.NoticeText>
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
    </>
  );
}

export default NoticeItem;
