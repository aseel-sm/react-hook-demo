// import React, { useReducer } from "react";
// import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import HookCounter from "./components/HookCounter";
// import HookCounter2 from "./components/HookCounter2";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/hookCounterFour";
// import UseEffectOne from "./components/UseEffectOne";
// import HookObject from "./components/HookObject";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import Interval from "./components/Interval";
// import FetchData from "./components/FetchData";
// import Hello from "./components/Hello";
// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
// import ComponentA from "./components/Globals State/ComponentA";
// import ComponentB from "./components/Globals State/ComponentB";
// import ComponentC from "./components/Globals State/ComponentC";
// export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "+":
//       return state + 1;

//     case "-":
//       return state - 1;
//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// };
// export const NameContext = new React.createContext();
// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="App">
//         {/* <Greet name="Pinkiee" heroName="JB">
//         <p>Sample para</p>
//       </Greet>
//       <Greet name="Sttrappu" heroName="V" />
//       <Greet name="Maaku" heroName="BTS" /> */}
//         {/* <Message></Message> */}
//         {/* <Welcome></Welcome> */}
//         {/* <HookCounter></HookCounter>
//       <HookCounter2></HookCounter2>
//       <HookCounterThree></HookCounterThree> */}
//         {/* <HookCounterFour></HookCounterFour> */}
//         {/* {     <UseEffectOne></UseEffectOne>} */}
//         {/* <MouseContainer /> */}
//         {/* <Interval /> */}
//         {/* <FetchData /> */}
//         {/* <NameContext.Provider value={"I love Salukka"}>
//         <Hello />
//       </NameContext.Provider> */}
//         {/* <Counter1 /> */}
//         {/* <Counter3 /> */}

//         <h1>Count - {count}</h1>
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

// export default App;
