import React, { useState } from "react";

function HookUSobject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) =>                    // with prevstate
            setName((prevstat) => {
              return {
                ...prevstat,
                firstName: e.target.value,
              };
            })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>
          your firstName is- "{name.firstName}" and lastName is- "
          {name.lastName}"
        </h2>
      </form>
    </div>
  );
}

export default HookUSobject;
