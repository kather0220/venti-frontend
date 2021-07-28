import React, { useState } from 'react';
import * as S from './styles';

function FilterItem(props) {
  const [color, setColors] = useState('#000000');
  const [background, setBackground] = useState('#EEEEEE');
  const [clicked, setClicked] = useState(false);
  const handleClickButton = () => {
    setClicked(!clicked);
    if (clicked === true) {
      setBackground('#F40552');
      setColors('#FFFFFF');
    } else {
      setBackground('#EEEEEE');
      setColors('#000000');
    }
    return true;
  };

  return (
    <S.StyledItem
      id={props.id}
      color={color}
      background={background}
      onClick={(e) => {
        handleClickButton();
        props.onClick(e);
      }}
    >
      {props.name}
    </S.StyledItem>
  );
}

export default FilterItem;
