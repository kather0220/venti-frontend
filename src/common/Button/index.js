import * as S from './styles';
import React from 'react';

function Button(props) {
  return <S.StyledButton onClick={props.onClick}>{props.text}</S.StyledButton>;
}

export default Button;
