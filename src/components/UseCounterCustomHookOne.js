import React, { useState } from 'react'

function UseCounterCustomHookOne() {
    const [count, setCount] = useState(0);

    const incrementCount =()=>{
        setCount(prevCount => prevCount +1)
    }

    const decrementCount =()=>{
        setCount(prevCount => prevCount -1)
    }

    const reset =()=>{
        setCount(0)
    }

  return (
    <div>
        <h3>count -{count}</h3>
        <button onClick={incrementCount}>++</button>
        <button onClick={decrementCount}>--</button>
        <button onClick={reset}>reset</button>
        
    </div>
  )
}

export default UseCounterCustomHookOne