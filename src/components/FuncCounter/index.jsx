import React, { useState, useEffect } from 'react';

const Counter = props => {
  const [value, setValue] = useState(0);

  const [isShown, setIsShown] = useState(false);

  /*   
  const [state, setState] = useState({
    value: 0,
    isShown: false,
  });  
  */
  // Ближе к классовому состоянию

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>

      <button onClick={() => setIsShown(!isShown)}>Change Visibility</button>

      {isShown && <span>Conditional rendered span</span>}
    </div>
  );
};

export default Counter;
