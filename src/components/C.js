import React, { useContext } from "react";
import { context1 } from "./Parent";

function C() {
  const contextProvidedValue3 = useContext(context1);

  return (
    <div>
      <h4>C component count - {contextProvidedValue3.countValue}</h4>
      <button onClick={() => contextProvidedValue3.dispatchMethod("increment")}>
        +C
      </button>
      <button onClick={() => contextProvidedValue3.dispatchMethod("decrement")}>
        -C
      </button>
      <button onClick={() => contextProvidedValue3.dispatchMethod("reset")}>
        resetC
      </button>
    </div>
  );
}

export default C;
