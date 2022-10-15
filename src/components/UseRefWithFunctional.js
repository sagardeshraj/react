import React, { useState, useEffect, useRef } from "react";

// useRef instace returns a current object, then we can use various stuff upon our useCases 
// but if you need to add a function to the current object then go ahead and define it like we did for the 
// timer in the example below---and it doesn't rerender the component. 

function UseRefWithFunctional() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  console.log(intervalRef);
 
  useEffect(() => {
    // if we'd provide this function to the simple variable then accessing it in the onClick would return error
    // so to soleve we used useRef and store timmer function in the current proprty and uesd it later.
    // const intervalv= setInterval(()...)... this wouldn't work
      intervalRef.current = setInterval(() => {  
      setTimer((prevTimer) => prevTimer + 1)
      // setTimer(timer+1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, []);     // if wanna change state without function then do it just add the state on which it depends

  return (
      <div>
          <h3>Hook timer - {timer}</h3>
          <button onClick={()=> clearInterval(intervalRef.current)}>clear hook timer</button>
      </div>
  )
}

export default UseRefWithFunctional;
