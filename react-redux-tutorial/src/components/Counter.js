import React from "react";

export default function Counter({ num, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{num}</h1>

      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
