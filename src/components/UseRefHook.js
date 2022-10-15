import React,{ useEffect, useRef } from 'react'

function UseRefHook() {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus();
        inputRef.current.style.color = 'red';
        // inputRef.current.value = 'red';

        console.log(inputRef);
    },[])

  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default UseRefHook