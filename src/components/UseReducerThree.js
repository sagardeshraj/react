import React, { useReducer } from 'react'
// multiple useReducers---now all of this is at component level but combining it with useContext it is totally 
// could work as redux---see it in the next example

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


function UseReducerThree() {

    const [ count , dispatch ] = useReducer(reducer, initialState) // count = initialState
    const [ countTwo , dispatchTwo ] = useReducer(reducer, initialState) // reusing the same code again

    
  return (
    <div>
        <div>
        <h4> count - {count} </h4>
        <button onClick={()=>dispatch('increment')}>incrementCount</button>
        <button onClick={()=>dispatch('decrement')}>decrementCount</button>
        <button onClick={()=>dispatch('reset')}>resetCount</button>
        </div>
        <div>
        <h4> countTwo - {countTwo} </h4>
        <button onClick={()=>dispatchTwo('increment')}>incrementCount</button>
        <button onClick={()=>dispatchTwo('decrement')}>decrementCount</button>
        <button onClick={()=>dispatchTwo('reset')}>resetCount</button>
        </div>
    </div>
  )
}

export default UseReducerThree