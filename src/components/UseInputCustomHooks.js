import React from "react";
import useInput from "../hooks/useInput";

function UseInputCustomHooks() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Firstname</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Lastname</label>
          <input {...bindLastName} type="text" />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default UseInputCustomHooks;
