import React, { useReducer } from "react";
import A from "./A";

export const context1 = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  // state is the current state---
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Parent() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>count - {count}</h4>
      <button onClick={()=>dispatch('increment') }>+parent</button>
      <button onClick={()=>dispatch('decrement') }>--parent</button>
      <button onClick={()=>dispatch('reset') }>resetParent</button>
      <context1.Provider
        value={{ countValue: count, dispatchMethod: dispatch }}
      >
        <A />
      </context1.Provider>
    </div>
  );
}

export default Parent;
