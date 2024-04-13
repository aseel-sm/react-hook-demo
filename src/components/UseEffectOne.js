import React, { useState, useEffect } from "react";

function UseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Yes");
    document.title = `Clicked ${count}`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        name=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        id=""
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UseEffectOne;
