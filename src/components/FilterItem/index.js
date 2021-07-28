import React, { useState } from 'react';
import * as S from './styles';

function FilterItem(props) {
  const [color, setColors] = useState('#000000');
  const [background, setBackground] = useState('#EEEEEE');
  const [clicked, setClicked] = useState(false);
  const handleClickButton = () => {
    setClicked(!clicked);
    //setColors(name);
    if (clicked === true) {
      setBackground('#F40552');
      setColors('#FFFFFF');
    } else {
      setBackground('#EEEEEE');
      setColors('#000000');
    }
    /*
    if (e.target.brandList.includes(e.target.id)) {
      console.log('중복');
      e.target.brandList = e.target.brandList.filter(
        (element) => element !== e.target.id
      );
      console.log(e.target.brandList.brandList.length);
    } else {
      e.target.brandList.push(e.target.id);
    }
    */
    return true;
  };

  return (
    <S.StyledItem
      id={props.id}
      color={color}
      background={background}
      onClick={() => {
        handleClickButton();
        props.onClick();
      }}
      brandList={props.brandList}
      //background={props.isClicked ? 'pink' : 'grey'}
      //color={props.isClicked ? 'white' : 'black'}
      //onClick={props.onClick}
      //isClicked={props.isClicked}
    >
      {props.name}
    </S.StyledItem>
  );
}

export default FilterItem;
