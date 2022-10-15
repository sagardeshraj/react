import React, { useReducer } from "react";
// it is the counter similar to the redux ----

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  // state is the current state---
  switch (
    action.type // by passsing action as object we can add additional values like value that is given below-
  ) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerTwo() {
  const [count, dispatch] = useReducer(reducer, initialState); // count = initialState

  return (
    <div>
      <h4> firstCount - {count.firstCounter} </h4>
      <h4> SecondCount - {count.secondCounter} </h4>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        incrementCount
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrementCount
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        incrementCountFive
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrementCountFive
      </button>

      <div>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        incrementCount2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        decrementCount2
      </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>resetCount</button>
    </div>
  );
}

export default UseReducerTwo;
