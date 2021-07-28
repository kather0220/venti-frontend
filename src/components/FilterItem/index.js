import React, { useState } from 'react';
import * as S from './styles';

function FilterItem(props) {
  const [color, setColors] = useState('#000000');
  const [background, setBackground] = useState('#EEEEEE');
  const [clicked, setClicked] = useState(false);
  const handleClickButton = (e) => {
    e.preventDefault();

    if (clicked === false) {
      setBackground('#F40552');
      setColors('#FFFFFF');
    } else {
      setBackground('#EEEEEE');
      setColors('#000000');
    }
    setClicked(!clicked);
    return true;
  };

  return (
    <S.StyledItem
      id={props.id}
      color={color}
      background={background}
      onClick={(e) => {
        handleClickButton(e);
        props.onClick(e);
      }}
    >
      {props.name}
    </S.StyledItem>
  );
}

export default FilterItem;
