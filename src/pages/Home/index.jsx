import React, { useState } from 'react';
import Mouse from '../../components/Mouse';
import Counter from '../../components/FuncCounter';
import FuncMouse from '../../components/FuncMouse';

function Home() {
  const [isShown, setIsShown] = useState(true);
  return (
    <div
      style={{ minWidth: '10px', minHeight: '10px', backgroundColor: 'red' }}
      // onClick={() => setIsShown(!isShown)}
      >
      {isShown && <FuncMouse />}
      <Counter/>
    </div>
  );
}

export default Home;
