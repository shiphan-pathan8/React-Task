import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="bg-gray-300 p-8 rounded shadow-md text-cente flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <p className="text-xl mb-4 font-bold">{count}</p>
        <div className="space-x-4">
          <button onClick={increment}className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Increment
          </button>
          <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
