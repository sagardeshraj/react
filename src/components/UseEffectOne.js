import React, { useEffect, useState } from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0)

    useEffect(()=>{     // runs after every  render i.e componentDidUpdate and also once i.e. componentDidMount 
        document.title = `you clicked ${count} times`; 
    })
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    </div>
  )
}

export default UseEffectOne