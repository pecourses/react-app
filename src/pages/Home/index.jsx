import React, { useState, useEffect } from 'react';
import Mouse from '../../components/Mouse';
import Counter from '../../components/FuncCounter';
import FuncMouse from '../../components/FuncMouse';
import useMouse from '../../components/hooks/useMouse';
import Test from '../../components/Test';

function Home() {

  return (
    <div
    // style={{ minWidth: '10px', minHeight: '10px', backgroundColor: 'red' }}
    // onClick={() => setIsShown(!isShown)}
    >
      <Test />
    </div>
  );
}

export default Home;
