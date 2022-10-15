import React from "react";
import { useState } from "react";

// it is used in functional component only ---
// if this is the child component then it will rerender on every parent render even if there is no prop change
// that is why we pass this function in the memo HOC ----
// it is used for performance optimization ---

function ReactMemo() {
  const [count, setCount] = useState(0);
  console.log("rendering ReactMemo component ");
  return (
    <div>
      <h1>count - {count}</h1>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        ++
      </button>
    </div>
  );
}

export default React.memo(ReactMemo);
