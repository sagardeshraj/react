import React from 'react'
import useCounter from '../hooks/useCounter'

function UseCounterCustomHookTwo() {
    
    const [count, incrementCount, decrementCount, reset] = useCounter(12, 2) // if no argument it gets from defaults

  return (
    <div>
        <h3>count -{count}</h3>
        <button onClick={incrementCount}>++</button>
        <button onClick={decrementCount}>--</button>
        <button onClick={reset}>reset</button>
        
    </div>
  )
}

export default UseCounterCustomHookTwo