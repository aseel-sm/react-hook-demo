import React, { useState } from "react";
function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset </button>
      <button onClick={() => setCount(count + 1)}>+ {1}</button>
      <button onClick={increment5}>+5</button>
      <button onClick={() => setCount(count - 1)}>- {1}</button>
    </div>
  );
}
export default HookCounter2;
