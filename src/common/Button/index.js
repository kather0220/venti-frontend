import * as S from './styles';
import React from 'react';

function Button(props) {
  return <S.StyledButton>{props.text}</S.StyledButton>;
}

export default Button;
