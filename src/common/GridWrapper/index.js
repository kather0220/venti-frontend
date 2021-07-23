import * as S from './styles';
import React from 'react';
import GridItem from '../GridItem/index';

function GridWrapper(props) {
  // 필요시 styles에 있는 컴포넌트를 바로 export 해주는 식으로 바꾸기. 즉, 이 index 파일은 없어지는 거.
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
