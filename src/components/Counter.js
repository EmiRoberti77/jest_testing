import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCount = (increments) => {
    setCount((state) => state + increments);
  };
  return (
    <div>
      <h1 data-testid="cnt">{count}</h1>
      <hr />
      <button data-testid="btn" onClick={() => onCount(1)}>
        count
      </button>
      <hr />
      <input type="text" data-testid="inputVal" />
    </div>
  );
};

export default Counter;
