import React, { useState } from 'react'

function CounterForProfiler() {
    const [count, setcount] = useState(0)
  return (
    <div>
        <h3>count - {count}</h3>
        <button onClick={()=>setcount(count+1) }>++</button>
    </div>
  )
}

export default CounterForProfiler