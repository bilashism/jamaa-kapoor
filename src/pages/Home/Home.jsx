import React, { useState } from 'react';
import Header from './Header';

const Home = () => {
  const [count, setCount] = useState(0);
  if (count > 5) throw new Error('oops');

  return (
    <>
      <Header />
      <button
        onClick={() => {
          setCount(prev => prev + 1);
        }}
      >
        {count}
      </button>
    </>
  );
};

export default Home;
