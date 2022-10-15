import React, { useState, useMemo } from "react";
// if a fucntion is already  called in the render and it performs some api fetching and some time consuming 
// proccess it renders everytime so it hampers the performance even though the state that is not related to 
// that particuler function also get delayed , so we need something to cashed the value of that fucntion
// and only run when the state on which it depends changes and let it render faster on some other state . 


function UseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  },[counterOne])



  return (
    <div>
      <div>
        <button onClick={incrementOne}>count One - {counterOne}</button>
        {/* <span>{isEven() ? "even" : "odd"}</span> */}
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemoHook;
