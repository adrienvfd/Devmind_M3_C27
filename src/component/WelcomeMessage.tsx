import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [message, setMessage] = useState<string>('Please wait…');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Welcome to Devmind!');
    }, 3000);

    return () => clearTimeout(timer);
  });

  return <div>
    <p>{message}</p>
    <img width="200px" src="https://www.devmind.ro/static/imgs/big-f65889fd23d95255a2cf6088b3f3eb53.png" />
  </div>;
};

export default WelcomeMessage;