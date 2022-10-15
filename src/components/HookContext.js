import React, { useContext } from "react";

let contextOne = React.createContext();

function HookContext() {
  return (
    <div>
      <contextOne.Provider value={"sagar"}>
        <HookContextTwo />
      </contextOne.Provider>
    </div>
  );
}

export default HookContext;

function HookContextTwo() {
  const xyz = useContext(contextOne);   // it returns a any datatype provided in the the provider
  // it just simplify the consuming in functional one and for class their something the { contextType }
  return (
    <div>
      <h4>this is the provided value - {xyz}</h4>
    </div>
  );
}






