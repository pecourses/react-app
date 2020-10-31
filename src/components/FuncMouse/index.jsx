import React, { useState, useEffect } from 'react';

const FuncMouse = props => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = ({ clientX: x, clientY: y }) => setMouse({ x, y });

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
    
  }, []);

  return <div>{`X:${mouse?.x} Y:${mouse?.y}`}</div>;
};

export default FuncMouse;
