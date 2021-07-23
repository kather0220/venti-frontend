import React, { useState } from 'react';

const SearchInput = (props) => {
  const [isInput, setIsInput] = useState(false);
  //console.log(isInput);
  return <>{props.isInput === '' ? setIsInput(true) : <></>}</>;
};

export default SearchInput;
