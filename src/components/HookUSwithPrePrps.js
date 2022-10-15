import React, { useState } from 'react'

function HookUSwithPrePrps() {
    const initialCount = 0;
    const [count, setCount] = useState(0)

        const incrementFive = ()=>{
            for(let i=0; i<5; i++ ){
                // setCount(count+1)
                setCount(prevState => {
                    return prevState+1
                });
            }
        }
   
  return (
    <div>
        <h1> count {count}</h1>
        <button onClick={()=> setCount(prevState => prevState+1)}>count ++ </button>  
        <button onClick={()=>setCount(prevState => prevState-1)}>count -- </button>  
        <button onClick={()=>setCount(initialCount)}>reset </button>  
        <button onClick={()=>incrementFive()}>increment 5 </button>  
        
    </div>
  )
}

export default HookUSwithPrePrps