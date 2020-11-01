import React, { useState, useEffect } from 'react';
import { format, differenceInMilliseconds } from 'date-fns';

const Timer = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const date = new Date();

      setTime(date);
      setStartTime(date);

      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [isActive]);

  const diff = differenceInMilliseconds(time, startTime);
  const formattedDate = format(diff, 'mm:ss:SSS');

  return (
    <article>
      <h1>{formattedDate}</h1>

      <button
        onClick={() => {
          setIsActive(!isActive);
        }}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={() => {
          setIsActive(false);
          const date = new Date();
          setStartTime(date);
          setTime(date);
        }}>
        Reset
      </button>
    </article>
  );
};

export default Timer;
