import React, { useContext } from 'react'
import { context1 } from './Parent'
import B from './B'


function A() {
    const contextProvidedValue1 = useContext(context1)
  return (
    <div>
        <h4>A component count - {contextProvidedValue1.countValue}</h4>
        <button onClick={()=>contextProvidedValue1.dispatchMethod('increment')} >+A</button>
        <button onClick={()=>contextProvidedValue1.dispatchMethod('decrement')} >-A</button>
        <button onClick={()=>contextProvidedValue1.dispatchMethod('reset')} >resetA</button>
        <B />
    </div>
  )
}

export default A