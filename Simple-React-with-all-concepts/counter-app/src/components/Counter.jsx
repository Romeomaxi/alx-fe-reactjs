import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  // Using useState hook to manage the count state
  const [count, setCount] = useState(initialCount);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Using event handlers */}
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
