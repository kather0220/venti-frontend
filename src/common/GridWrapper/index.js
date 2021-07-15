import * as S from './styles';
import React from 'react';
import GridItem from '../GridItem/index';

function GridWrapper() {
  return (
    <S.StyledGridWrapper>
      <GridItem />
      <GridItem />

      <GridItem />

      <GridItem />

      <GridItem />

      <GridItem />

      <GridItem />

      <GridItem />
    </S.StyledGridWrapper>
  );
}

export default GridWrapper;
