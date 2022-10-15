// import React from "react";

// function ListRenderingObj() {
//   const persons = [
//     { id: 1, name: "sagar", age: 24, skill: "react" },
//     { id: 2, name: "ravi", age: 26, skill: "angular" },
//     { id: 3, name: "ram", age: 28, skill: "node" },
//     { id: 4, name: "pihu", age: 29, skill: "mongo" },
//   ];

//   const personList = persons.map((person) => (
//     <h2 key={person.id}>
//       i am {person.name} age {person.age} with skill {person.skill}
//     </h2>
//   ));
//   return <div>{personList}</div>;
// }

// export default ListRenderingObj;


// or we can refactor the map jsx into new files, so------------------*********************--------------------

import React from 'react'
import MapJsx from './MapJsx';

function ListRenderingObj() {

    const persons = [
        { id: 1, name: "sagar", age: 24, skill: "react" },
        { id: 2, name: "ravi", age: 26, skill: "angular" },
        { id: 3, name: "ram", age: 28, skill: "node" },
        { id: 4, name: "pihu", age: 29, skill: "mongo" },
      ];


      const personList = persons.map(x=> <MapJsx person = {x} /> )

  return (
    <h3>
        {personList}
    </h3>
  )
}

export default ListRenderingObj