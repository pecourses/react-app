import React, { useState, useEffect } from 'react';

const Counter = props => {
  const [value, setValue] = useState(0);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(v => v + 1);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>+</button>
      <button onClick={() => setValue(prevValue => prevValue - 1)}>-</button>

      <button onClick={() => setIsShown(!isShown)}>Change Visibility</button>

      {isShown && <span>Conditional rendered span</span>}
    </div>
  );
};

export default Counter;
