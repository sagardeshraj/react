import React, { useReducer } from 'react'
// it is the counter with simple useReducer---

const initialState = 0;
const reducer = (state , action)=>{   // state is the current state---
    switch(action){
        case 'increment' :
            return state +1
        case 'decrement' :
            return state-1
        case 'reset' :
            return initialState
        default :
            return state
    }
}


function UseReducerOne() {

    const [ count , dispatch ] = useReducer(reducer, initialState) // count = current initialStatee

    
  return (
    <div>
        <h4> count - {count} </h4>
        <button onClick={()=>dispatch('increment')}>incrementCount</button>
        <button onClick={()=>dispatch('decrement')}>decrementCount</button>
        <button onClick={()=>dispatch('reset')}>resetCount</button>
    </div>
  )
}

export default UseReducerOne