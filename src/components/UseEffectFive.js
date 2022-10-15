import React,{ useEffect, useState } from 'react'

function UseEffectFive() {
    const [count, setCount] = useState(0);

    const tick =()=>{
        setCount(count+1)
        // setCount(prevCount => prevCount + 1) // another way of working,,now pass the empty array and the output 
        // will be the same 
    }
   
    useEffect(()=>{
        const interval = setInterval(tick, 1000)

        return ()=>{
            clearInterval(interval);
        }
    },[count])
    // ---},[])---we usually add listner and timer in the mounting phase and cancel it in unmounting and state change
    // in the mounting cause it to rerender and we would have get the timing output as you can see--
    // we if we would have pass it in empty array in this component it only runs once even on state change --
    // so the conclusion is --if there is state changing code in the functional mounting i.e. [] list--
    // it will only run once even state changing so to make it work we have to pass the state or prop in 
    // array then only the timing output will be right.
    
    

  return (
    <div>
        <h4>this is count- {count}</h4>
    </div>
  )
}

export default UseEffectFive