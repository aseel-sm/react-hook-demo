import React, { useContext } from "react";
import { CountContext } from "../../App";
function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          countContext.countDispatch("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}

export default ComponentF;
