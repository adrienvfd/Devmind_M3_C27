import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Counter component mounted');
    return () => console.log('Counter component unmounted');
  });

  useEffect(() => {
    console.log(`Counter value changed to: ${counter}`);
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;