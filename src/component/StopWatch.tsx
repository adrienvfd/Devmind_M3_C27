import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <p>
        {Math.floor(time / 60) > 0
          ? `${Math.floor(time / 60)} minutes and ${time % 60} seconds`
          : `${time} seconds`
        }
      </p>
    </div>
  );
};

export default Stopwatch;