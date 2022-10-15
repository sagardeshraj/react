import React, { useContext } from 'react'
import { context1 } from './Parent'
import C from './C'

function B() {
    // const contextProvidedValue2 = useContext(context1);
  return (
    <div>
        <h2>B component is not given any functionality</h2>
         {/* <h4>B component count - {contextProvidedValue2.countValue}</h4>
        <button onClick={()=>contextProvidedValue2.dispatchMethod('increment')} >+B</button>
        <button onClick={()=>contextProvidedValue2.dispatchMethod('decrement')} >-B</button>
        <button onClick={()=>contextProvidedValue2.dispatchMethod('reset')} >resetB</button> */}
        <C />
    </div>
  )
}

export default B