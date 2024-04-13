import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "-":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "+2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };

    case "-2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;

    default:
      return state;
  }
};
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>first:{count.firstCounter}</h1>
      <h1>second:{count.secondCounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "+", value: 1 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "-", value: 1 });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "+", value: 5 });
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "-", value: 5 });
        }}
      >
        -5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <div>
        second
        <button
          onClick={() => {
            dispatch({ type: "+2", value: 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "-2", value: 1 });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter2;
