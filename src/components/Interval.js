import React, { useState, useEffect } from "react";

function Interval() {
  const [count, setCount] = useState(0);
  const tick = () => setCount((p) => p + 1);
  //  setCount((prevCount) => prevCount + 1);
  useEffect(() => {
    const intervel = setInterval(tick, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, []);
  return <div>{count}</div>;
}

export default Interval;
