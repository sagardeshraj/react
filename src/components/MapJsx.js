import React from 'react'

function MapJsx({person}) {
  return (
    <div>
        <pre>
            person Id : {person.id} <br />
            person name : {person.name} <br />
            person age : {person.age} <br />
            person skill : {person.skill} <br />
        </pre>
    </div>
  )
}

export default MapJsx