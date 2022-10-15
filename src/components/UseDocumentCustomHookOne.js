import React, {useState, useEffect} from 'react'

function UseDocumentCustomHookOne() {
    const [count, setCount] = useState(0);

useEffect(()=>{
    document.title = `count : ${count}`
},[count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count - {count}</button>

    </div>
  )
}

export default UseDocumentCustomHookOne;