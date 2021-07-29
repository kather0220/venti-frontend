import * as S from './styles';
import React from 'react';

function CategoryUnderLine(props) {
  return (
    <S.UnderlineContainer>
      <S.CategoryUnderLine>
        <S.BlackUnderline
          margin={props.margin}
          width={props.width}
        ></S.BlackUnderline>
      </S.CategoryUnderLine>
    </S.UnderlineContainer>
  );
}

export default CategoryUnderLine;
