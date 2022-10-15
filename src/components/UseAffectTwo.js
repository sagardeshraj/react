import React, { useEffect, useState } from "react";

function UseAffectTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // conditionally run effect--
    console.log("useEffect - updating document title");
    document.title = `you clicked ${count} times`;
  }, [count]); // change in props or state

  

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  )
}

export default UseAffectTwo;
