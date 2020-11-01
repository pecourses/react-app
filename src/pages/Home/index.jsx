import React, { useState } from 'react';
import Mouse from '../../components/Mouse';
import Counter from '../../components/FuncCounter';
import FuncMouse from '../../components/FuncMouse';
import useHookMouse from '../../components/hooks/useMouse';

function Home() {
  const [isShown, setIsShown] = useState(true);
  const { x, y } = useHookMouse();

  return (
    <div
      style={{ minWidth: '10px', minHeight: '10px', backgroundColor: 'red' }}
      // onClick={() => setIsShown(!isShown)}
    >
      {isShown && (
        <h1>
          X: {x}, Y: {y}
        </h1>
      )}
      <Counter />
    </div>
  );
}

export default Home;
