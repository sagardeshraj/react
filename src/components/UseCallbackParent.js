import React, { useState, useCallback } from "react";
import ButtonUseCallback from "./ButtonUseCallback";
import CountUseCallback from "./CountUseCallback";
import TitleUseCallback from "./TitleUseCallback";

// we usually stop rerendering by React.memo() but as it turns out that if we pass a funcion as a prop
// then a new function reference is created so that the component rerenders , to avoid this problem 
// useCallback is used , if we pass that function with callback then provide the state it should depend on
// in the array.

function UseCallbackParent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age])



  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]) 

  return (
    <div>
      <TitleUseCallback />
      <CountUseCallback text="age" count={age} />
      <ButtonUseCallback handleClick={incrementAge}>increment Age</ButtonUseCallback>
      <CountUseCallback text='salary' count={salary} />
      <ButtonUseCallback handleClick={incrementSalary}>increment Salary</ButtonUseCallback>
    </div>
  );
}

export default UseCallbackParent;
