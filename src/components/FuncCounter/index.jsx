import React, { useState, useEffect } from 'react';

const Counter = props => {
  const [value, setValue] = useState(0); // Состояние
  const [isShown, setIsShown] = useState(false); // Состояние

  useEffect(() => { // Функция-синхронизатор
    const id = setTimeout(() => {
      // Как синхронизировать
      setValue(v => v + 1);
    }, 1000);

    return () => {
      clearTimeout(id); // Выполняется перед следующей синхронизацией
    };
  }, [value]); // Когда синхронизировать

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>+</button>  {/* Вычисления в JSX - плохо! */}
      <button onClick={() => setValue(prevValue => prevValue - 1)}>-</button>  {/* Вычисления в JSX - плохо! */}
      <button onClick={() => setIsShown(!isShown)}>Change Visibility</button>  {/* Вычисления в JSX - плохо! */}
      {isShown && <span>Conditional rendered span</span>}  {/* Тут нормально */}
    </div>
  );
};

export default Counter;
