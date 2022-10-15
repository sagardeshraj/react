import React, { useState } from 'react'

function HookCounter() {
    //hooks at the top---
    // don't call hooks inside loops , conditions , or nested funtion---
    const [count, setCount] = useState(0);  
    const [increment, setIncrement] = useState(0)

    const xyz = ()=>{
        setCount(count+1)
        setIncrement(increment+1)
    }

  return (
    <div>
        <h4>And the Count is {count}</h4>
        <h4>And the increment is {increment}</h4>
        <button onClick={xyz}>++</button>
    </div>
  )
}

export default HookCounter;
