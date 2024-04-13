import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 2;

    case "-":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};
function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
      <div>
        <h1>{countTwo}</h1>
        <button
          onClick={() => {
            dispatchTwo("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatchTwo("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatchTwo("reset");
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter3;
