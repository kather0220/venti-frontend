import * as S from './styles';
import React from 'react';
import GridItem from '../GridItem/index';

function GridWrapper(props) {
  return (
    <S.StyledGridWrapper visible={props.visible}>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </S.StyledGridWrapper>
  );
}

export default GridWrapper;
