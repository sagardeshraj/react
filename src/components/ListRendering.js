import React from 'react'

function ListRendering() {
    const names = ['a', 'b','c'];

  return (
    <div>
        {
            names.map(name=> <h2>{name}</h2> )
        }
    </div>
  )


    //   const nameList = names.map((name)=><h2>{name}</h2>)     // before return
    
    // return <h1>{nameList}</h1>     


}

export default ListRendering