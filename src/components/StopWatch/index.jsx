import React, { useState, useEffect } from 'react';
import { format, differenceInMilliseconds } from 'date-fns';

const Timer = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [timeHistory, setTimeHistory] = useState([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const date = new Date();
      setTimeHistory([]);
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

          setTimeHistory([]);
        }}>
        Reset
      </button>
      <button
        onClick={() => {
          setTimeHistory([...timeHistory, formattedDate]);
        }}>
        Check!
      </button>
      <ul>
        {timeHistory.map(time => (
          <li key={time}>{time}</li>
        ))}
      </ul>
    </article>
  );
};

export default Timer;
