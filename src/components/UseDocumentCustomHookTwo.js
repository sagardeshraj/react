import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

// we resuse the logic with custom hook and we can use all previous hooks to make new hook to serve our purpose
// in file one we used the react useEffect and in this we used custom hook from hooks directory.  

function UseDocumentCustomHookTwo() {
    const [count, setCount] = useState(0);

 useDocumentTitle(count);   // a custom hooks added in the hooks directory--

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count - {count}</button>

    </div>
  )
}

export default UseDocumentCustomHookTwo;