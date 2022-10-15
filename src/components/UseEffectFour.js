import React, { useState, useEffect } from 'react'
import UseEffectThree from './UseEffectThree'
// this comp. is the container component of component {UseEffectThree}--and simulation of ComponentWillUnmount

function UseEffectFour() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
        {display && <UseEffectThree />}
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default UseEffectFour   