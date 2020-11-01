import React, { useState, useEffect } from 'react';

function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = ({ clientX: x, clientY: y }) => { setMouse({ x, y }) };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    }
  }, [])

  return { x: mouse.x, y: mouse.y }
}

export default useMouse;